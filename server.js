import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 3001);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const SITE_NICKNAME = process.env.SITE_NICKNAME || "rigid-2";
const DATABASE_URL = process.env.DATABASE_URL || "";
const DATA_DIR = path.join(__dirname, "server-data");
const DATA_FILE =
  process.env.DATA_FILE ||
  path.join(
    DATA_DIR,
    SITE_NICKNAME === "rigid-2" ? "progress.json" : `progress-${SITE_NICKNAME}.json`
  );
const PUBLIC_DIR = path.join(__dirname, "dist");
const CHALLENGE_DAYS = 10;
const DAILY_MODULE_TARGET = 1;
const TWO_MODULE_SITES = new Set(["rigid-2", "headstart-2", "r2", "h2"]);
const HEADSTART_SITES = new Set(["headstart-1", "headstart-2", "h1", "h2"]);
const CHALLENGE_TIME_ZONE = "America/New_York";
const CHALLENGE_CUTOFF_HOUR = 12;
const SHARED_CHALLENGE_START_AT =
  process.env.CHALLENGE_START_AT || "2026-08-05T00:00:00-04:00";

let progressCache = {};
let writeQueue = Promise.resolve();
let dbPool = null;

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(data));
}

function sanitizeParticipantId(value) {
  return String(value || "").trim().slice(0, 120);
}

function sanitizeNickname(value) {
  return String(value || "").trim().slice(0, 120);
}

function createParticipantKey(prolificId) {
  return sanitizeParticipantId(prolificId).toLowerCase();
}

function normalizeProgressCache(recordsByKey = {}) {
  return Object.values(recordsByKey).reduce((normalizedRecords, record) => {
    if (!record || typeof record !== "object" || !record.prolificId) {
      return normalizedRecords;
    }

    const participantKey = createParticipantKey(record.prolificId);
    normalizedRecords[participantKey] = mergeParticipantRecords(
      normalizedRecords[participantKey] || {},
      record
    );

    return normalizedRecords;
  }, {});
}

function findParticipantRecord(prolificId) {
  const participantKey = createParticipantKey(prolificId);

  if (progressCache[participantKey]) {
    return progressCache[participantKey];
  }

  return Object.values(progressCache).find(
    (record) => createParticipantKey(record?.prolificId) === participantKey
  );
}

async function loadProgress() {
  if (DATABASE_URL) {
    dbPool = new pg.Pool({
      connectionString: DATABASE_URL,
      max: Number(process.env.DATABASE_POOL_SIZE || 5),
      ssl:
        process.env.DATABASE_SSL === "true"
          ? { rejectUnauthorized: false }
          : undefined,
    });

    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS participant_progress (
        site_nickname TEXT NOT NULL,
        participant_key TEXT NOT NULL,
        prolific_id TEXT NOT NULL,
        nickname TEXT NOT NULL,
        progress JSONB NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        PRIMARY KEY (site_nickname, participant_key)
      )
    `);

    const result = await dbPool.query(
      `SELECT participant_key, progress FROM participant_progress WHERE site_nickname = $1`,
      [SITE_NICKNAME]
    );

    progressCache = normalizeProgressCache(
      Object.fromEntries(result.rows.map((row) => [row.participant_key, row.progress]))
    );
    return;
  }

  try {
    const fileContents = await fs.readFile(DATA_FILE, "utf8");
    progressCache = normalizeProgressCache(JSON.parse(fileContents));
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Could not read progress file:", error);
    }
    progressCache = {};
  }
}

function saveProgress(participantKey, record) {
  if (dbPool) {
    const recordsToSave =
      participantKey && record
        ? [[participantKey, record]]
        : Object.entries(progressCache);

    writeQueue = writeQueue.then(async () => {
      for (const [key, participantRecord] of recordsToSave) {
        await dbPool.query(
          `
            INSERT INTO participant_progress (
              site_nickname,
              participant_key,
              prolific_id,
              nickname,
              progress,
              updated_at
            )
            VALUES ($1, $2, $3, $4, $5::jsonb, NOW())
            ON CONFLICT (site_nickname, participant_key)
            DO UPDATE SET
              prolific_id = EXCLUDED.prolific_id,
              nickname = EXCLUDED.nickname,
              progress = EXCLUDED.progress,
              updated_at = NOW()
          `,
          [
            SITE_NICKNAME,
            key,
            participantRecord.prolificId || "",
            participantRecord.nickname || "",
            JSON.stringify(participantRecord),
          ]
        );
      }
    });

    return writeQueue;
  }

  writeQueue = writeQueue.then(async () => {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(progressCache, null, 2));
  });

  return writeQueue;
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });

    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function summarizeProgress(record) {
  const learnedWords = record.learnedWords || {};
  const moduleCompletionDates = Object.fromEntries(
    Object.entries(record.moduleCompletionDates || {}).filter(([, value]) => value)
  );
  const moduleTimeSeconds = record.moduleTimeSeconds || {};
  const learnedWordCount = Object.values(learnedWords).filter(Boolean).length;
  const completedModules = Object.keys(moduleCompletionDates).length;
  const moduleTimeTotalSeconds = Object.values(moduleTimeSeconds).reduce(
    (total, value) => total + Number(value || 0),
    0
  );
  const quizAttempts = normalizeQuizAttempts(record.quizAttempts || []);
  const quizScoreAverages = calculateQuizScoreAverages(quizAttempts);

  return {
    prolificId: record.prolificId,
    nickname: record.nickname || "",
    learnedWords,
    learnedWordCount,
    completedModules,
    timeUsedSeconds: Number(record.timeUsedSeconds || moduleTimeTotalSeconds || 0),
    moduleTimeSeconds,
    moduleCardIndexes: record.moduleCardIndexes || {},
    moduleCompletionDates,
    startedModules: record.startedModules || {},
    activityLogs: normalizeActivityLogs(record.activityLogs || []),
    quizAttempts,
    firstAttemptQuizAverage: quizScoreAverages.firstAttemptAverage,
    finalAttemptQuizAverage: quizScoreAverages.finalAttemptAverage,
    firstAttemptQuizAverageByModule: quizScoreAverages.firstAttemptAverageByModule,
    finalAttemptQuizAverageByModule: quizScoreAverages.finalAttemptAverageByModule,
    challengeStartDate: record.challengeStartDate
      ? getEffectiveChallengeStartDate(record)
      : "",
    updatedAt: record.updatedAt,
  };
}

function createBlankParticipantRecord(prolificId, nickname) {
  return {
    prolificId,
    nickname,
    learnedWords: {},
    timeUsedSeconds: 0,
    moduleTimeSeconds: {},
    moduleCardIndexes: {},
    moduleCompletionDates: {},
    startedModules: {},
    activityLogs: [],
    quizAttempts: [],
    challengeStartDate: "",
    updatedAt: new Date().toISOString(),
  };
}

function mergeParticipantRecords(previousRecord = {}, incomingRecord = {}) {
  return {
    ...previousRecord,
    ...incomingRecord,
    prolificId: incomingRecord.prolificId || previousRecord.prolificId || "",
    nickname: previousRecord.nickname || incomingRecord.nickname || "",
    learnedWords: mergeBooleanMaps(
      previousRecord.learnedWords || {},
      incomingRecord.learnedWords || {}
    ),
    timeUsedSeconds: Math.max(
      Number(previousRecord.timeUsedSeconds || 0),
      Number(incomingRecord.timeUsedSeconds || 0)
    ),
    moduleTimeSeconds: mergeNumberMaps(
      previousRecord.moduleTimeSeconds || {},
      incomingRecord.moduleTimeSeconds || {}
    ),
    moduleCardIndexes: mergeLatestNumberMaps(
      previousRecord.moduleCardIndexes || {},
      incomingRecord.moduleCardIndexes || {}
    ),
    moduleCompletionDates: mergeTextMaps(
      previousRecord.moduleCompletionDates || {},
      incomingRecord.moduleCompletionDates || {}
    ),
    startedModules: mergeTextMaps(
      previousRecord.startedModules || {},
      incomingRecord.startedModules || {}
    ),
    activityLogs: mergeActivityLogs(
      previousRecord.activityLogs || [],
      incomingRecord.activityLogs || []
    ),
    quizAttempts: mergeQuizAttempts(
      previousRecord.quizAttempts || [],
      incomingRecord.quizAttempts || []
    ),
    challengeStartDate:
      incomingRecord.challengeStartDate || previousRecord.challengeStartDate || "",
    updatedAt:
      String(incomingRecord.updatedAt || "") > String(previousRecord.updatedAt || "")
        ? incomingRecord.updatedAt
        : previousRecord.updatedAt || incomingRecord.updatedAt || "",
  };
}

function normalizeActivityLog(log) {
  if (!log || typeof log !== "object") return log;

  if (log.progress !== "completed") return log;

  // Legacy rows created before quiz-specific completion logging represented
  // finishing all 15 flashcards before entering the quiz.
  return {
    ...log,
    progress: "completed (flashcard)",
  };
}

function normalizeActivityLogs(activityLogs) {
  return Array.isArray(activityLogs) ? activityLogs.map(normalizeActivityLog) : [];
}

function normalizeQuizAttempts(quizAttempts) {
  return Array.isArray(quizAttempts)
    ? quizAttempts
        .filter((attempt) => attempt && typeof attempt === "object")
        .map((attempt) => ({
          ...attempt,
          attemptNumber: Number(attempt.attemptNumber || 1),
          score: Number(attempt.score || 0),
          maxScore: Number(attempt.maxScore || 15),
          passed: Boolean(attempt.passed),
        }))
    : [];
}

function mergeBooleanMaps(previousMap = {}, incomingMap = {}) {
  return {
    ...previousMap,
    ...incomingMap,
  };
}

function mergeNumberMaps(previousMap = {}, incomingMap = {}) {
  const mergedMap = { ...previousMap };

  Object.entries(incomingMap).forEach(([key, value]) => {
    mergedMap[key] = Math.max(Number(mergedMap[key] || 0), Number(value || 0));
  });

  return mergedMap;
}

function mergeLatestNumberMaps(previousMap = {}, incomingMap = {}) {
  return {
    ...previousMap,
    ...Object.fromEntries(
      Object.entries(incomingMap).map(([key, value]) => [key, Number(value || 0)])
    ),
  };
}

function mergeTextMaps(previousMap = {}, incomingMap = {}) {
  const mergedMap = { ...previousMap };

  Object.entries(incomingMap).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") {
      delete mergedMap[key];
      return;
    }

    mergedMap[key] = value;
  });

  return mergedMap;
}

function mergeActivityLogs(previousLogs = [], incomingLogs = []) {
  const mergedLogs = new Map();

  [...normalizeActivityLogs(previousLogs), ...normalizeActivityLogs(incomingLogs)].forEach(
    (log, index) => {
      if (!log || typeof log !== "object") return;

      const key =
        log.id ||
        `${log.startAt || ""}-${log.endAt || ""}-${log.module || ""}-${
          log.progress || ""
        }-${index}`;
      mergedLogs.set(key, {
        ...(mergedLogs.get(key) || {}),
        ...log,
        id: log.id || key,
      });
    }
  );

  return Array.from(mergedLogs.values()).sort((a, b) =>
    String(a.startAt || "").localeCompare(String(b.startAt || ""))
  );
}

function mergeQuizAttempts(previousAttempts = [], incomingAttempts = []) {
  const mergedAttempts = new Map();

  [...normalizeQuizAttempts(previousAttempts), ...normalizeQuizAttempts(incomingAttempts)].forEach(
    (attempt, index) => {
      const key =
        attempt.id ||
        `${attempt.moduleId || ""}-${attempt.attemptNumber || ""}-${
          attempt.attemptedAt || ""
        }-${index}`;

      mergedAttempts.set(key, {
        ...(mergedAttempts.get(key) || {}),
        ...attempt,
        id: attempt.id || key,
      });
    }
  );

  return Array.from(mergedAttempts.values()).sort((a, b) =>
    String(a.attemptedAt || "").localeCompare(String(b.attemptedAt || ""))
  );
}

async function handleProgressPost(request, response) {
  const body = await readRequestBody(request);
  const payload = JSON.parse(body || "{}");
  const prolificId = sanitizeParticipantId(payload.prolificId);
  const nickname = sanitizeNickname(payload.nickname);

  if (!prolificId || !nickname) {
    sendJson(response, 400, { error: "Missing Prolific ID or nickname" });
    return;
  }

  const participantKey = createParticipantKey(prolificId);
  progressCache = normalizeProgressCache(progressCache);
  const previousRecord = findParticipantRecord(prolificId) || {};
  const updatedRecord = {
    ...previousRecord,
    prolificId,
    nickname: previousRecord.nickname || nickname,
    learnedWords: mergeBooleanMaps(
      previousRecord.learnedWords || {},
      payload.learnedWords || {}
    ),
    timeUsedSeconds: Math.max(
      Number(previousRecord.timeUsedSeconds || 0),
      Number(payload.timeUsedSeconds || 0)
    ),
    moduleTimeSeconds: mergeNumberMaps(
      previousRecord.moduleTimeSeconds || {},
      payload.moduleTimeSeconds || {}
    ),
    moduleCardIndexes: mergeLatestNumberMaps(
      previousRecord.moduleCardIndexes || {},
      payload.moduleCardIndexes || {}
    ),
    moduleCompletionDates: mergeTextMaps(
      previousRecord.moduleCompletionDates || {},
      payload.moduleCompletionDates || {}
    ),
    startedModules: mergeTextMaps(
      previousRecord.startedModules || {},
      payload.startedModules || {}
    ),
    activityLogs: Array.isArray(payload.activityLogs)
      ? mergeActivityLogs(previousRecord.activityLogs || [], payload.activityLogs)
      : normalizeActivityLogs(previousRecord.activityLogs || []),
    quizAttempts: Array.isArray(payload.quizAttempts)
      ? mergeQuizAttempts(previousRecord.quizAttempts || [], payload.quizAttempts)
      : normalizeQuizAttempts(previousRecord.quizAttempts || []),
    challengeStartDate:
      payload.challengeStartDate || previousRecord.challengeStartDate || "",
    updatedAt: new Date().toISOString(),
  };

  progressCache[participantKey] = updatedRecord;
  await saveProgress(participantKey, updatedRecord);
  sendJson(response, 200, { ok: true, progress: summarizeProgress(updatedRecord) });
}

async function handleSessionPost(request, response) {
  const body = await readRequestBody(request);
  const payload = JSON.parse(body || "{}");
  const prolificId = sanitizeParticipantId(payload.prolificId);
  const nickname = sanitizeNickname(payload.nickname);

  if (!prolificId || !nickname) {
    sendJson(response, 400, { error: "Missing Prolific ID or nickname" });
    return;
  }

  const participantKey = createParticipantKey(prolificId);
  progressCache = normalizeProgressCache(progressCache);

  if (!progressCache[participantKey]) {
    const existingRecord = findParticipantRecord(prolificId);

    if (existingRecord) {
      progressCache[participantKey] = mergeParticipantRecords(
        existingRecord,
        { prolificId, nickname }
      );
      await saveProgress(participantKey, progressCache[participantKey]);
    }
  }

  if (!progressCache[participantKey]) {
    progressCache[participantKey] = createBlankParticipantRecord(prolificId, nickname);
    await saveProgress(participantKey, progressCache[participantKey]);
  }

  sendJson(response, 200, {
    ok: true,
    participant: summarizeProgress(progressCache[participantKey]),
  });
}

function renderAdminPage(records, adminKey = "") {
  const rows = records
    .map((record) => {
      const totalLearningTime = formatDuration(record.timeUsedSeconds);
      const moduleLearningTimes = formatModuleLearningTimes(record.moduleTimeSeconds);
      const challengeStatus = getChallengeStatus(record);
      const firstAttemptAverage = formatQuizAverage(record.firstAttemptQuizAverage);
      const finalAttemptAverage = formatQuizAverage(record.finalAttemptQuizAverage);
      const firstAttemptAverageByModule = formatQuizAverageByModule(
        record.firstAttemptQuizAverageByModule
      );
      const finalAttemptAverageByModule = formatQuizAverageByModule(
        record.finalAttemptQuizAverageByModule
      );

      return `
        <tr>
          <td>${escapeHtml(record.prolificId)}</td>
          <td>${escapeHtml(record.nickname || "-")}</td>
          <td>${record.learnedWordCount}</td>
          <td>${record.completedModules}</td>
          <td>${escapeHtml(challengeStatus)}</td>
          <td>${escapeHtml(firstAttemptAverage)}</td>
          <td>${escapeHtml(finalAttemptAverage)}</td>
          <td>${escapeHtml(firstAttemptAverageByModule)}</td>
          <td>${escapeHtml(finalAttemptAverageByModule)}</td>
          <td>${escapeHtml(moduleLearningTimes)}</td>
          <td>${escapeHtml(totalLearningTime)}</td>
          <td>${escapeHtml(record.challengeStartDate || "-")}</td>
          <td>${escapeHtml(record.updatedAt || "-")}</td>
        </tr>
      `;
    })
    .join("");
  const detailRows = records
    .flatMap((record) =>
      (record.activityLogs || []).map((log) => ({
        prolificId: record.prolificId,
        nickname: record.nickname || "",
        ...log,
      }))
    )
    .sort((a, b) => String(a.startAt).localeCompare(String(b.startAt)))
    .map(
      (log) => `
        <tr>
          <td>${escapeHtml(log.prolificId)}</td>
          <td>${escapeHtml(log.nickname || "-")}</td>
          <td>${escapeHtml(log.date || "-")}</td>
          <td>${escapeHtml(log.timestamps || "-")}</td>
          <td>${escapeHtml(log.module || "-")}</td>
          <td>${escapeHtml(log.progress || "-")}</td>
        </tr>
      `
    )
    .join("");

  const progressApiUrl = adminKey
    ? `/api/progress?key=${encodeURIComponent(adminKey)}`
    : "/api/progress";

  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(SITE_NICKNAME)} Admin</title>
        <style>
          body { margin: 0; padding: 32px; font-family: Arial, sans-serif; background: #fff7ed; color: #2f2a25; }
          h1 { margin: 0 0 8px; font-size: 32px; }
          p { margin: 0 0 24px; color: #66594f; }
          table { width: 100%; border-collapse: collapse; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 35px rgba(60, 40, 20, 0.1); margin-bottom: 30px; }
          th, td { padding: 14px 16px; border-bottom: 1px solid #efe2d2; text-align: left; }
          th { background: #263b59; color: white; font-size: 14px; }
          tr:last-child td { border-bottom: 0; }
          a { color: #263b59; font-weight: 700; }
          h2 { margin: 28px 0 12px; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(SITE_NICKNAME)} Progress</h1>
        <p>${records.length} participant${records.length === 1 ? "" : "s"} recorded. Raw JSON is available at <a href="${progressApiUrl}">/api/progress</a>.</p>
        <h2>Participant Summary</h2>
        <table>
          <thead>
            <tr>
              <th>Prolific ID</th>
              <th>Nickname</th>
              <th>Words Learned</th>
              <th>Number of Modules Completed</th>
              <th>10-Day Challenge Status</th>
              <th>Average Quiz Score (First Attempts)</th>
              <th>Average Quiz Score (Final Attempts)</th>
              <th>Average Quiz Score by Module (First Attempts)</th>
              <th>Average Quiz Score by Module (Final Attempts)</th>
              <th>Time Spent on Each Module</th>
              <th>Total Learning Time</th>
              <th>Challenge Start</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>${rows || '<tr><td colspan="13">No progress has been recorded yet.</td></tr>'}</tbody>
        </table>
        <h2>Detailed Daily Logs</h2>
        <table>
          <thead>
            <tr>
              <th>Prolific ID</th>
              <th>Nickname</th>
              <th>Date</th>
              <th>Timestamps</th>
              <th>Module</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>${detailRows || '<tr><td colspan="6">No detailed activity logs yet.</td></tr>'}</tbody>
        </table>
      </body>
    </html>`;
}

function formatDuration(totalSeconds) {
  const safeTotalSeconds = Math.max(0, Math.floor(Number(totalSeconds || 0)));
  const hours = Math.floor(safeTotalSeconds / 3600);
  const minutes = Math.floor((safeTotalSeconds % 3600) / 60);
  const seconds = safeTotalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${String(seconds).padStart(2, "0")}s`;
  }

  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function formatModuleLearningTimes(moduleTimeSeconds = {}) {
  const entries = Object.entries(moduleTimeSeconds)
    .filter(([, seconds]) => Number(seconds || 0) > 0)
    .sort(([moduleIdA], [moduleIdB]) => {
      const numberA = Number(String(moduleIdA).replace(/\D/g, ""));
      const numberB = Number(String(moduleIdB).replace(/\D/g, ""));

      return numberA - numberB;
    });

  if (!entries.length) return "-";

  return entries
    .map(([moduleId, seconds]) => `${formatModuleName(moduleId)}: ${formatDuration(seconds)}`)
    .join("; ");
}

function formatModuleName(moduleId) {
  const moduleNumber = String(moduleId).replace(/\D/g, "");

  return moduleNumber ? `Module ${moduleNumber}` : moduleId;
}

function calculateQuizScoreAverages(quizAttempts = []) {
  const attemptsByModule = new Map();

  normalizeQuizAttempts(quizAttempts).forEach((attempt) => {
    if (!attempt.moduleId) return;

    const moduleAttempts = attemptsByModule.get(attempt.moduleId) || [];
    moduleAttempts.push(attempt);
    attemptsByModule.set(attempt.moduleId, moduleAttempts);
  });

  const firstAttemptScores = [];
  const finalAttemptScores = [];
  const firstAttemptAverageByModule = {};
  const finalAttemptAverageByModule = {};

  attemptsByModule.forEach((moduleAttempts, moduleId) => {
    const sortedAttempts = [...moduleAttempts].sort((a, b) =>
      String(a.attemptedAt || "").localeCompare(String(b.attemptedAt || ""))
    );
    const firstAttempt = sortedAttempts[0];
    const finalAttempt = sortedAttempts[sortedAttempts.length - 1];

    if (firstAttempt) {
      const firstAttemptPercent = getQuizPercent(firstAttempt);
      firstAttemptScores.push(firstAttemptPercent);
      firstAttemptAverageByModule[moduleId] = firstAttemptPercent;
    }

    if (finalAttempt) {
      const finalAttemptPercent = getQuizPercent(finalAttempt);
      finalAttemptScores.push(finalAttemptPercent);
      finalAttemptAverageByModule[moduleId] = finalAttemptPercent;
    }
  });

  return {
    firstAttemptAverage: average(firstAttemptScores),
    finalAttemptAverage: average(finalAttemptScores),
    firstAttemptAverageByModule,
    finalAttemptAverageByModule,
  };
}

function getQuizPercent(attempt) {
  const maxScore = Number(attempt.maxScore || 0);

  if (maxScore <= 0) return 0;

  return (Number(attempt.score || 0) / maxScore) * 100;
}

function average(values) {
  if (!values.length) return null;

  return values.reduce((total, value) => total + value, 0) / values.length;
}

function formatQuizAverage(value) {
  return typeof value === "number" ? `${value.toFixed(1)}%` : "-";
}

function formatQuizAverageByModule(quizAverageByModule = {}) {
  const entries = Object.entries(quizAverageByModule)
    .filter(([, value]) => typeof value === "number")
    .sort(([moduleIdA], [moduleIdB]) => {
      const numberA = Number(String(moduleIdA).replace(/\D/g, ""));
      const numberB = Number(String(moduleIdB).replace(/\D/g, ""));

      return numberA - numberB;
    });

  if (!entries.length) return "-";

  return entries
    .map(([moduleId, value]) => `${formatModuleName(moduleId)}: ${formatQuizAverage(value)}`)
    .join("; ");
}

function getChallengeStatus(record) {
  if (!record.challengeStartDate) return "Not started";

  const challengeStartDate = getEffectiveChallengeStartDate(record);
  const dailyTarget = getDailyModuleTarget();
  const completionDayIndexes = Object.values(record.moduleCompletionDates || {})
    .map((completionValue) =>
      getCompletionDayIndex(completionValue, challengeStartDate)
    )
    .filter((dayIndex) => dayIndex >= 0 && dayIndex < CHALLENGE_DAYS);
  const currentDayIndex = getChallengeDayIndexForDate(
    new Date(),
    challengeStartDate
  );
  let headstartCarryoverModules = 0;
  const dayStatuses = Array.from({ length: CHALLENGE_DAYS }, (_, dayIndex) => {
    const completeCount = completionDayIndexes.filter(
      (completionDayIndex) => completionDayIndex === dayIndex
    ).length;

    if (isHeadstartSite()) {
      const availableModules = completeCount + headstartCarryoverModules;
      const isSuccessful = availableModules >= dailyTarget;
      headstartCarryoverModules = isSuccessful ? availableModules - dailyTarget : 0;

      return isSuccessful;
    }

    return completeCount >= dailyTarget;
  });

  if (dayStatuses.every(Boolean)) return "Successful";

  const hasFailedPastDay = dayStatuses.some(
    (isSuccessful, dayIndex) => !isSuccessful && dayIndex < currentDayIndex
  );

  return hasFailedPastDay ? "Failed" : "Pending";
}

function getEffectiveChallengeStartDate(record) {
  return SHARED_CHALLENGE_START_AT || record.challengeStartDate;
}

function getDailyModuleTarget() {
  return TWO_MODULE_SITES.has(SITE_NICKNAME.toLowerCase())
    ? 2
    : DAILY_MODULE_TARGET;
}

function isHeadstartSite() {
  return HEADSTART_SITES.has(SITE_NICKNAME.toLowerCase());
}

function getDateStringInTimeZone(timeZone, date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function getTimePartsInTimeZone(timeZone, date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const value = (type) => Number(parts.find((part) => part.type === type)?.value);

  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    hour: value("hour") % 24,
    minute: value("minute"),
    second: value("second"),
  };
}

function getTimeZoneOffsetMs(timeZone, date) {
  const parts = getTimePartsInTimeZone(timeZone, date);
  const timeAsUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  );

  return timeAsUtc - date.getTime();
}

function makeDateInTimeZone(timeZone, dateString, hour = 0) {
  const [year, month, day] = dateString.split("-").map(Number);
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, 0, 0));
  const firstPass = new Date(utcGuess.getTime() - getTimeZoneOffsetMs(timeZone, utcGuess));

  return new Date(
    utcGuess.getTime() - getTimeZoneOffsetMs(timeZone, firstPass)
  );
}

function addDays(dateString, daysToAdd) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + daysToAdd);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function getDayDifference(startDateString, endDateString) {
  const [startYear, startMonth, startDay] = startDateString.split("-").map(Number);
  const [endYear, endMonth, endDay] = endDateString.split("-").map(Number);
  const startDate = new Date(startYear, startMonth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  return Math.floor((endDate - startDate) / 86400000);
}

function getChallengeStartAt(challengeStartValue) {
  if (!challengeStartValue) return new Date();

  if (challengeStartValue.includes("T")) {
    const parsedDate = new Date(challengeStartValue);
    return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
  }

  return makeDateInTimeZone(CHALLENGE_TIME_ZONE, challengeStartValue, 0);
}

function getChallengeCutoffAt(challengeStartValue, cutoffIndex = 0) {
  const startAt = getChallengeStartAt(challengeStartValue);
  const startDateInEastern = getDateStringInTimeZone(CHALLENGE_TIME_ZONE, startAt);
  const cutoffDate = addDays(startDateInEastern, cutoffIndex + 1);

  return makeDateInTimeZone(
    CHALLENGE_TIME_ZONE,
    cutoffDate,
    CHALLENGE_CUTOFF_HOUR
  );
}

function getChallengeDayIndexForDate(date, challengeStartValue) {
  for (let dayIndex = 0; dayIndex < CHALLENGE_DAYS; dayIndex += 1) {
    if (date < getChallengeCutoffAt(challengeStartValue, dayIndex)) {
      return dayIndex;
    }
  }

  return CHALLENGE_DAYS;
}

function getCompletionDayIndex(completionValue, challengeStartValue) {
  if (!completionValue) return -1;

  if (completionValue.startsWith("day-")) {
    return Number(completionValue.replace("day-", "")) - 1;
  }

  if (completionValue.includes("T")) {
    return getChallengeDayIndexForDate(new Date(completionValue), challengeStartValue);
  }

  const startDate = getDateStringInTimeZone(
    CHALLENGE_TIME_ZONE,
    getChallengeStartAt(challengeStartValue)
  );

  return getDayDifference(startDate, completionValue);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isAdminAuthorized(requestUrl) {
  if (!ADMIN_PASSWORD) return true;
  return requestUrl.searchParams.get("key") === ADMIN_PASSWORD;
}

function isResetAuthorized(requestUrl) {
  return Boolean(ADMIN_PASSWORD) && requestUrl.searchParams.get("key") === ADMIN_PASSWORD;
}

async function resetAllProgress() {
  progressCache = {};

  if (dbPool) {
    await dbPool.query("DELETE FROM participant_progress");
    return;
  }

  await saveProgress();
}

async function serveStaticFile(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const sourceFiles = {
    "/src/data/words.js": path.join(__dirname, "src", "data", "words.js"),
    "/src/styles.css": path.join(__dirname, "src", "styles.css"),
  };

  if (sourceFiles[requestUrl.pathname]) {
    try {
      const sourceFile = await fs.readFile(sourceFiles[requestUrl.pathname]);
      response.writeHead(200, {
        "Content-Type": requestUrl.pathname.endsWith(".css")
          ? "text/css"
          : "text/javascript",
        "Cache-Control": "no-store",
      });
      response.end(sourceFile);
      return;
    } catch {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
  }

  const requestedPath =
    requestUrl.pathname === "/" ? "index.html" : requestUrl.pathname.slice(1);
  const filePath = path.normalize(path.join(PUBLIC_DIR, requestedPath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    const extension = path.extname(filePath);
    const contentTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".png": "image/png",
      ".svg": "image/svg+xml",
    };

    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

await loadProgress();

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (requestUrl.pathname === "/api/health") {
      sendJson(response, 200, { ok: true, site: SITE_NICKNAME });
      return;
    }

    if (requestUrl.pathname === "/api/session" && request.method === "POST") {
      await handleSessionPost(request, response);
      return;
    }

    if (requestUrl.pathname === "/api/progress" && request.method === "POST") {
      await handleProgressPost(request, response);
      return;
    }

    if (requestUrl.pathname === "/api/progress" && request.method === "GET") {
      if (!isAdminAuthorized(requestUrl)) {
        sendJson(response, 401, { error: "Unauthorized" });
        return;
      }

      const records = Object.values(progressCache).map(summarizeProgress);
      sendJson(response, 200, { participants: records });
      return;
    }

    if (requestUrl.pathname === "/admin") {
      if (!isAdminAuthorized(requestUrl)) {
        response.writeHead(401, { "Content-Type": "text/html" });
        response.end(
          "<h1>Unauthorized</h1><p>Add the admin key to the URL, for example /admin?key=YOUR_PASSWORD.</p>"
        );
        return;
      }

      const records = Object.values(progressCache)
        .map(summarizeProgress)
        .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));

      response.writeHead(200, {
        "Content-Type": "text/html",
        "Cache-Control": "no-store",
      });
      response.end(renderAdminPage(records, requestUrl.searchParams.get("key") || ""));
      return;
    }

    if (requestUrl.pathname === "/admin/reset-all-progress") {
      if (!isResetAuthorized(requestUrl)) {
        response.writeHead(401, { "Content-Type": "text/html" });
        response.end(
          "<h1>Unauthorized</h1><p>This reset endpoint requires ADMIN_PASSWORD to be set and the correct admin key in the URL.</p>"
        );
        return;
      }

      if (requestUrl.searchParams.get("confirm") !== "DELETE") {
        response.writeHead(400, { "Content-Type": "text/html" });
        response.end(
          "<h1>Confirmation Required</h1><p>Add <code>&confirm=DELETE</code> to the URL to wipe all participant progress.</p>"
        );
        return;
      }

      await resetAllProgress();
      response.writeHead(200, {
        "Content-Type": "text/html",
        "Cache-Control": "no-store",
      });
      response.end(
        "<h1>All participant progress has been reset.</h1><p>Open your admin pages to confirm there are 0 participants recorded.</p>"
      );
      return;
    }

    await serveStaticFile(request, response);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`${SITE_NICKNAME} running at http://127.0.0.1:${PORT}`);
  console.log(`Admin dashboard: http://127.0.0.1:${PORT}/admin`);
  console.log(
    DATABASE_URL
      ? "Progress data: Render Postgres"
      : `Progress data: ${DATA_FILE}`
  );
});
