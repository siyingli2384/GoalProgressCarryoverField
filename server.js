import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 3001);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";
const SITE_NICKNAME = process.env.SITE_NICKNAME || "rigid-2";
const DATA_DIR = path.join(__dirname, "server-data");
const DATA_FILE =
  process.env.DATA_FILE ||
  path.join(
    DATA_DIR,
    SITE_NICKNAME === "rigid-2" ? "progress.json" : `progress-${SITE_NICKNAME}.json`
  );
const PUBLIC_DIR = path.join(__dirname, "dist");

let progressCache = {};
let writeQueue = Promise.resolve();

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

function createParticipantKey(prolificId, nickname) {
  return `${prolificId}::${nickname.toLowerCase()}`;
}

async function loadProgress() {
  try {
    const fileContents = await fs.readFile(DATA_FILE, "utf8");
    progressCache = JSON.parse(fileContents);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Could not read progress file:", error);
    }
    progressCache = {};
  }
}

function saveProgress() {
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
    challengeStartDate: record.challengeStartDate || "",
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
    challengeStartDate: "",
    updatedAt: new Date().toISOString(),
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

async function handleProgressPost(request, response) {
  const body = await readRequestBody(request);
  const payload = JSON.parse(body || "{}");
  const prolificId = sanitizeParticipantId(payload.prolificId);
  const nickname = sanitizeNickname(payload.nickname);

  if (!prolificId || !nickname) {
    sendJson(response, 400, { error: "Missing Prolific ID or nickname" });
    return;
  }

  const participantKey = createParticipantKey(prolificId, nickname);
  const previousRecord = progressCache[participantKey] || {};
  const updatedRecord = {
    ...previousRecord,
    prolificId,
    nickname,
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
    challengeStartDate:
      payload.challengeStartDate || previousRecord.challengeStartDate || "",
    updatedAt: new Date().toISOString(),
  };

  progressCache[participantKey] = updatedRecord;
  await saveProgress();
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

  const participantKey = createParticipantKey(prolificId, nickname);

  if (!progressCache[participantKey]) {
    progressCache[participantKey] = createBlankParticipantRecord(prolificId, nickname);
    await saveProgress();
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

      return `
        <tr>
          <td>${escapeHtml(record.prolificId)}</td>
          <td>${escapeHtml(record.nickname || "-")}</td>
          <td>${record.learnedWordCount}</td>
          <td>${record.completedModules}</td>
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
              <th>Modules Completed</th>
              <th>Time Spent on Each Module</th>
              <th>Total Learning Time</th>
              <th>Challenge Start</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>${rows || '<tr><td colspan="8">No progress has been recorded yet.</td></tr>'}</tbody>
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

    await serveStaticFile(request, response);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`${SITE_NICKNAME} running at http://127.0.0.1:${PORT}`);
  console.log(`Admin dashboard: http://127.0.0.1:${PORT}/admin`);
  console.log(`Progress data: ${DATA_FILE}`);
});
