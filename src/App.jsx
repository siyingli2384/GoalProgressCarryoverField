import { useEffect, useMemo, useRef, useState } from "react";
import Flashcard from "./components/Flashcard.jsx";
import ModuleCard from "./components/ModuleCard.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Quiz from "./components/Quiz.jsx";
import { saveProgress, startSession } from "./api/progress.js";
import { modules } from "./data/words.js";

const LEARNED_STORAGE_KEY = "spanishLearning.learnedWords";
const TIME_STORAGE_KEY = "spanishLearning.timeUsedSeconds";
const MODULE_TIME_STORAGE_KEY = "spanishLearning.moduleTimeSeconds";
const MODULE_CARD_INDEX_STORAGE_KEY = "spanishLearning.moduleCardIndexes";
const MODULE_COMPLETION_STORAGE_KEY = "spanishLearning.moduleCompletionDates";
const STARTED_MODULE_STORAGE_KEY = "spanishLearning.startedModules";
const CHALLENGE_START_STORAGE_KEY = "spanishLearning.challengeStartDate";
const RESET_DATES_STORAGE_KEY = "spanishLearning.lastResetDates";
const ACTIVITY_LOG_STORAGE_KEY = "spanishLearning.activityLogs";
const INACTIVITY_LIMIT_MS = 30000;
const DAILY_MODULE_TARGET = 1;
const DAILY_VISUAL_BLOCKS = 2;
const CHALLENGE_DAYS = 10;
const RESET_TIME_ZONES = ["America/New_York", "America/Los_Angeles"];

function readStoredJson(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : fallback;
  } catch {
    return fallback;
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getLocalTimeString(date = new Date()) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
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

function addDays(dateString, daysToAdd) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + daysToAdd);
  return getLocalDateString(date);
}

function getDayDifference(startDateString, endDateString) {
  const [startYear, startMonth, startDay] = startDateString.split("-").map(Number);
  const [endYear, endMonth, endDay] = endDateString.split("-").map(Number);
  const startDate = new Date(startYear, startMonth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  return Math.floor((endDate - startDate) / 86400000);
}

function getSiteNickname() {
  const portMap = {
    3001: "rigid-2",
    3002: "headstart-2",
    3003: "rigid-1",
    3004: "headstart-1",
  };

  return import.meta.env.VITE_SITE_NICKNAME || portMap[window.location.port] || "rigid-2";
}

function App() {
  const lastActivityAtRef = useRef(Date.now());
  const lastSyncedPayloadRef = useRef("");
  const currentLogRef = useRef(null);
  const siteNickname = getSiteNickname();
  const isHeadstartSite = siteNickname.startsWith("headstart");
  const usesTwoModuleChallenge = ["rigid-2", "headstart-2"].includes(siteNickname);
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [mode, setMode] = useState("prolific");
  const [prolificId, setProlificId] = useState("");
  const [nickname, setNickname] = useState("");
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasSeenTranslation, setHasSeenTranslation] = useState(false);
  const [learnedWords, setLearnedWords] = useState(() =>
    readStoredJson(LEARNED_STORAGE_KEY, {})
  );
  const [timeUsedSeconds, setTimeUsedSeconds] = useState(() =>
    Number(localStorage.getItem(TIME_STORAGE_KEY) || 0)
  );
  const [moduleTimeSeconds, setModuleTimeSeconds] = useState(() =>
    readStoredJson(MODULE_TIME_STORAGE_KEY, {})
  );
  const [moduleCardIndexes, setModuleCardIndexes] = useState(() =>
    readStoredJson(MODULE_CARD_INDEX_STORAGE_KEY, {})
  );
  const [moduleCompletionDates, setModuleCompletionDates] = useState(() =>
    readStoredJson(MODULE_COMPLETION_STORAGE_KEY, {})
  );
  const [startedModules, setStartedModules] = useState(() =>
    readStoredJson(STARTED_MODULE_STORAGE_KEY, {})
  );
  const [activityLogs, setActivityLogs] = useState(() =>
    readStoredJson(ACTIVITY_LOG_STORAGE_KEY, [])
  );
  const [challengeStartDate, setChallengeStartDate] = useState(() =>
    localStorage.getItem(CHALLENGE_START_STORAGE_KEY) || ""
  );
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isCurrentQuizComplete, setIsCurrentQuizComplete] = useState(false);
  const [isSessionReady, setIsSessionReady] = useState(false);

  const selectedModule = modules.find((module) => module.id === selectedModuleId);
  const allWords = useMemo(() => modules.flatMap((module) => module.words), []);

  function getModuleLogName(moduleId, progress = "active") {
    const module = modules.find((item) => item.id === moduleId);
    const moduleName = module ? module.title.toLowerCase() : "module";

    return progress === "paused" || progress === "incomplete"
      ? `incomplete ${moduleName}`
      : moduleName;
  }

  function syncProgressNow(overrides = {}) {
    const trimmedProlificId = prolificId.trim();
    const trimmedNickname = nickname.trim();

    if (!trimmedProlificId || !trimmedNickname || !isSessionReady) return;

    const payload = {
      prolificId: trimmedProlificId,
      nickname: trimmedNickname,
      learnedWords,
      timeUsedSeconds,
      moduleTimeSeconds,
      moduleCardIndexes,
      moduleCompletionDates,
      startedModules,
      activityLogs,
      challengeStartDate,
      ...overrides,
    };

    lastSyncedPayloadRef.current = JSON.stringify(payload);
    saveProgress(payload).catch((error) => {
      console.error("Could not sync progress:", error);
    });
  }

  function applySavedProgress(savedProgress) {
    if (!savedProgress) return;

    setLearnedWords(savedProgress.learnedWords || {});
    setTimeUsedSeconds(Number(savedProgress.timeUsedSeconds || 0));
    setModuleTimeSeconds(savedProgress.moduleTimeSeconds || {});
    setModuleCardIndexes(savedProgress.moduleCardIndexes || {});
    setModuleCompletionDates(savedProgress.moduleCompletionDates || {});
    setStartedModules(savedProgress.startedModules || {});
    setActivityLogs(savedProgress.activityLogs || []);

    if (savedProgress.challengeStartDate) {
      setChallengeStartDate(savedProgress.challengeStartDate);
      localStorage.setItem(CHALLENGE_START_STORAGE_KEY, savedProgress.challengeStartDate);
    } else {
      setChallengeStartDate("");
      localStorage.removeItem(CHALLENGE_START_STORAGE_KEY);
    }
  }

  async function initializeParticipantSession(prolificIdValue, nicknameValue) {
    const trimmedProlificId = prolificIdValue.trim();
    const trimmedNickname = nicknameValue.trim();

    if (!trimmedProlificId || !trimmedNickname) return;

    const session = await startSession(trimmedProlificId, trimmedNickname);
    applySavedProgress(session.participant);
    setIsSessionReady(true);
    setMode(session.participant?.challengeStartDate ? "home" : "challenge");
  }

  function createActivityLogFromCurrent(progress = "incomplete") {
    if (!currentLogRef.current) return null;
    const currentLog = currentLogRef.current;
    const endDate = new Date();
    const finalProgress =
      currentLog.type === "paused" && progress === "incomplete" ? "paused" : progress;
    const timestamps = `${currentLog.startTime}-${getLocalTimeString(endDate)}${
      finalProgress === "paused" ? " (paused time)" : ""
    }`;

    return {
      id: `${currentLog.startAt}-${endDate.toISOString()}-${currentLog.moduleId}`,
      date: currentLog.date,
      startAt: currentLog.startAt,
      endAt: endDate.toISOString(),
      timestamps,
      module: getModuleLogName(currentLog.moduleId, finalProgress),
      progress: finalProgress,
    };
  }

  function createInstantActivityLog(moduleId, progress) {
    const logDate = new Date();
    const timeString = getLocalTimeString(logDate);

    return {
      id: `${logDate.toISOString()}-${moduleId}-${progress}`,
      date: getLocalDateString(logDate),
      startAt: logDate.toISOString(),
      endAt: logDate.toISOString(),
      timestamps: `${timeString}-${timeString}`,
      module: getModuleLogName(moduleId, progress),
      progress,
    };
  }

  function appendActivityLog(log, { syncImmediately = false } = {}) {
    if (!log) return;

    setActivityLogs((currentLogs) => {
      const updatedLogs = [...currentLogs, log];

      if (syncImmediately) {
        syncProgressNow({ activityLogs: updatedLogs });
      }

      return updatedLogs;
    });
  }

  function finishCurrentActivityLog(progress = "incomplete", options = {}) {
    const log = createActivityLogFromCurrent(progress);

    if (!log) return null;

    currentLogRef.current = null;
    appendActivityLog(log, options);
    return log;
  }

  function startActivityLog(type, moduleId) {
    if (!moduleId) return;

    if (
      currentLogRef.current &&
      currentLogRef.current.type === type &&
      currentLogRef.current.moduleId === moduleId
    ) {
      return;
    }

    finishCurrentActivityLog(type === "paused" ? "paused" : "incomplete");

    const startDate = new Date();
    currentLogRef.current = {
      type,
      moduleId,
      date: getLocalDateString(startDate),
      startAt: startDate.toISOString(),
      startTime: getLocalTimeString(startDate),
    };
  }

  useEffect(() => {
    function resetIncompleteProgressIfNeeded() {
      const savedResetDates = readStoredJson(RESET_DATES_STORAGE_KEY, {});
      const currentResetDates = RESET_TIME_ZONES.reduce((dates, timeZone) => {
        dates[timeZone] = getDateStringInTimeZone(timeZone);
        return dates;
      }, {});
      const hasSavedDates = RESET_TIME_ZONES.some(
        (timeZone) => savedResetDates[timeZone]
      );
      const shouldReset =
        hasSavedDates &&
        RESET_TIME_ZONES.some(
          (timeZone) => savedResetDates[timeZone] !== currentResetDates[timeZone]
        );

      if (!shouldReset) {
        localStorage.setItem(RESET_DATES_STORAGE_KEY, JSON.stringify(currentResetDates));
        return;
      }

      const savedLearnedWords = readStoredJson(LEARNED_STORAGE_KEY, {});
      const savedCompletionDates = readStoredJson(MODULE_COMPLETION_STORAGE_KEY, {});
      const incompleteModuleIds = modules
        .filter((module) => {
          const isComplete =
            savedCompletionDates[module.id] ||
            module.words.every((word) => savedLearnedWords[word.id]);

          return !isComplete;
        })
        .map((module) => module.id);
      const incompleteModuleIdSet = new Set(incompleteModuleIds);

      setLearnedWords((currentLearnedWords) => {
        const updatedLearnedWords = { ...currentLearnedWords };

        modules.forEach((module) => {
          if (!incompleteModuleIdSet.has(module.id)) return;

          module.words.forEach((word) => {
            delete updatedLearnedWords[word.id];
          });
        });

        return updatedLearnedWords;
      });

      setStartedModules((currentStartedModules) => {
        const updatedStartedModules = { ...currentStartedModules };

        incompleteModuleIds.forEach((moduleId) => {
          delete updatedStartedModules[moduleId];
        });

        return updatedStartedModules;
      });

      setModuleTimeSeconds((currentModuleTimes) => {
        const updatedModuleTimes = { ...currentModuleTimes };

        incompleteModuleIds.forEach((moduleId) => {
          delete updatedModuleTimes[moduleId];
        });

        return updatedModuleTimes;
      });

      setModuleCardIndexes((currentCardIndexes) => {
        const updatedCardIndexes = { ...currentCardIndexes };

        incompleteModuleIds.forEach((moduleId) => {
          delete updatedCardIndexes[moduleId];
        });

        return updatedCardIndexes;
      });

      if (selectedModuleId && incompleteModuleIdSet.has(selectedModuleId)) {
        setCardIndex(0);
        setIsFlipped(false);
      }

      localStorage.setItem(RESET_DATES_STORAGE_KEY, JSON.stringify(currentResetDates));
    }

    resetIncompleteProgressIfNeeded();
    const resetChecker = window.setInterval(resetIncompleteProgressIfNeeded, 60000);

    return () => window.clearInterval(resetChecker);
  }, [selectedModuleId]);

  useEffect(() => {
    localStorage.setItem(LEARNED_STORAGE_KEY, JSON.stringify(learnedWords));
  }, [learnedWords]);

  useEffect(() => {
    localStorage.setItem(TIME_STORAGE_KEY, String(timeUsedSeconds));
  }, [timeUsedSeconds]);

  useEffect(() => {
    localStorage.setItem(MODULE_TIME_STORAGE_KEY, JSON.stringify(moduleTimeSeconds));
  }, [moduleTimeSeconds]);

  useEffect(() => {
    localStorage.setItem(MODULE_CARD_INDEX_STORAGE_KEY, JSON.stringify(moduleCardIndexes));
  }, [moduleCardIndexes]);

  useEffect(() => {
    localStorage.setItem(
      MODULE_COMPLETION_STORAGE_KEY,
      JSON.stringify(moduleCompletionDates)
    );
  }, [moduleCompletionDates]);

  useEffect(() => {
    if (challengeStartDate) {
      localStorage.setItem(CHALLENGE_START_STORAGE_KEY, challengeStartDate);
    }
  }, [challengeStartDate]);

  useEffect(() => {
    localStorage.setItem(STARTED_MODULE_STORAGE_KEY, JSON.stringify(startedModules));
  }, [startedModules]);

  useEffect(() => {
    localStorage.setItem(ACTIVITY_LOG_STORAGE_KEY, JSON.stringify(activityLogs));
  }, [activityLogs]);

  useEffect(() => {
    const trimmedProlificId = prolificId.trim();
    const trimmedNickname = nickname.trim();

    if (!trimmedProlificId || !trimmedNickname || !isSessionReady) return undefined;

    const payload = {
      prolificId: trimmedProlificId,
      nickname: trimmedNickname,
      learnedWords,
      timeUsedSeconds,
      moduleTimeSeconds,
      moduleCardIndexes,
      moduleCompletionDates,
      startedModules,
      activityLogs,
      challengeStartDate,
    };
    const payloadString = JSON.stringify(payload);

    if (payloadString === lastSyncedPayloadRef.current) return undefined;

    const syncTimer = window.setTimeout(() => {
      lastSyncedPayloadRef.current = payloadString;
      saveProgress(payload).catch((error) => {
        console.error("Could not sync progress:", error);
      });
    }, 2000);

    return () => window.clearTimeout(syncTimer);
  }, [
    prolificId,
    nickname,
    isSessionReady,
    learnedWords,
    timeUsedSeconds,
    moduleTimeSeconds,
    moduleCardIndexes,
    moduleCompletionDates,
    startedModules,
    activityLogs,
    challengeStartDate,
  ]);

  useEffect(() => {
    function syncBeforeLeaving() {
      const trimmedProlificId = prolificId.trim();
      const trimmedNickname = nickname.trim();

      if (!trimmedProlificId || !trimmedNickname || !isSessionReady) return;

      saveProgress(
        {
          prolificId: trimmedProlificId,
          nickname: trimmedNickname,
          learnedWords,
          timeUsedSeconds,
          moduleTimeSeconds,
          moduleCardIndexes,
          moduleCompletionDates,
          startedModules,
          activityLogs,
          challengeStartDate,
        },
        { useBeacon: true, keepalive: true }
      );
    }

    function syncWhenHidden() {
      if (document.visibilityState === "hidden") {
        syncBeforeLeaving();
      }
    }

    window.addEventListener("pagehide", syncBeforeLeaving);
    document.addEventListener("visibilitychange", syncWhenHidden);

    return () => {
      window.removeEventListener("pagehide", syncBeforeLeaving);
      document.removeEventListener("visibilitychange", syncWhenHidden);
    };
  }, [
    prolificId,
    nickname,
    isSessionReady,
    learnedWords,
    timeUsedSeconds,
    moduleTimeSeconds,
    moduleCardIndexes,
    moduleCompletionDates,
    startedModules,
    activityLogs,
    challengeStartDate,
  ]);

  useEffect(() => {
    setModuleCompletionDates((currentCompletionDates) => {
      const today = getLocalDateString();
      const updatedCompletionDates = { ...currentCompletionDates };
      let hasNewCompletionDate = false;

      modules.forEach((module) => {
        const isModuleComplete = getLearnedCount(module) === module.words.length;

        if (isModuleComplete && !updatedCompletionDates[module.id]) {
          updatedCompletionDates[module.id] = today;
          hasNewCompletionDate = true;
        }
      });

      return hasNewCompletionDate ? updatedCompletionDates : currentCompletionDates;
    });
  }, [learnedWords]);

  useEffect(() => {
    const isLearningInModule =
      selectedModuleId &&
      (mode === "module" || (mode === "quiz" && !isCurrentQuizComplete));

    if (!isLearningInModule) return undefined;

    function recordActivity() {
      lastActivityAtRef.current = Date.now();
      if (!isManuallyPaused) {
        setIsTimerPaused(false);
      }
    }

    recordActivity();

    const activityEvents = [
      "click",
      "keydown",
      "mousemove",
      "pointerdown",
      "scroll",
      "touchstart",
    ];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, recordActivity, { passive: true });
    });

    const timer = window.setInterval(() => {
      const isRecentlyActive =
        Date.now() - lastActivityAtRef.current <= INACTIVITY_LIMIT_MS;

      if (
        isManuallyPaused ||
        document.visibilityState !== "visible" ||
        !isRecentlyActive
      ) {
        setIsTimerPaused(true);
        startActivityLog("paused", selectedModuleId);
        return;
      }

      setIsTimerPaused(false);
      startActivityLog("active", selectedModuleId);
      setTimeUsedSeconds((currentSeconds) => currentSeconds + 1);
      setModuleTimeSeconds((currentModuleTimes) => ({
        ...currentModuleTimes,
        [selectedModuleId]: (currentModuleTimes[selectedModuleId] || 0) + 1,
      }));
    }, 1000);

    return () => {
      window.clearInterval(timer);
      finishCurrentActivityLog("incomplete");
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, recordActivity);
      });
      setIsTimerPaused(false);
    };
  }, [mode, selectedModuleId, isManuallyPaused, isCurrentQuizComplete]);

  function getLearnedCount(module) {
    return module.words.filter((word) => learnedWords[word.id]).length;
  }

  function getResumeCardIndex(moduleId, learnedWordMap = learnedWords) {
    const module = modules.find((item) => item.id === moduleId);

    if (!module) return 0;

    const firstUnlearnedIndex = module.words.findIndex(
      (word) => !learnedWordMap[word.id]
    );

    return firstUnlearnedIndex === -1 ? module.words.length - 1 : firstUnlearnedIndex;
  }

  function getSavedCardIndex(moduleId) {
    const module = modules.find((item) => item.id === moduleId);

    if (!module) return 0;

    const savedIndex = Number(moduleCardIndexes[moduleId]);

    if (!Number.isFinite(savedIndex)) {
      return getResumeCardIndex(moduleId);
    }

    return Math.min(Math.max(savedIndex, 0), module.words.length - 1);
  }

  function rememberCardPosition(moduleId, index, { syncImmediately = false } = {}) {
    if (!moduleId) return;

    setModuleCardIndexes((currentIndexes) => {
      const updatedIndexes = {
        ...currentIndexes,
        [moduleId]: index,
      };

      if (syncImmediately) {
        syncProgressNow({ moduleCardIndexes: updatedIndexes });
      }

      return updatedIndexes;
    });
  }

  function markModuleCompleted(module, completionProgress = "completed") {
    const today = getLocalDateString();
    const completionLog = finishCurrentActivityLog(completionProgress, {
      syncImmediately: true,
    });

    if (!completionLog && completionProgress.startsWith("completed")) {
      appendActivityLog(createInstantActivityLog(module.id, completionProgress), {
        syncImmediately: true,
      });
    }

    setModuleCompletionDates((currentCompletionDates) => {
      if (currentCompletionDates[module.id]) {
        return currentCompletionDates;
      }

      return {
        ...currentCompletionDates,
        [module.id]: today,
      };
    });
  }

  function openModule(moduleId) {
    finishCurrentActivityLog("incomplete");
    const savedCardIndex = getSavedCardIndex(moduleId);
    lastActivityAtRef.current = Date.now();
    setStartedModules((currentStartedModules) => ({
      ...currentStartedModules,
      [moduleId]: currentStartedModules[moduleId] || getLocalDateString(),
    }));
    setSelectedModuleId(moduleId);
    setMode("module");
    setCardIndex(savedCardIndex);
    rememberCardPosition(moduleId, savedCardIndex);
    setIsFlipped(false);
    setHasSeenTranslation(false);
    setIsCurrentQuizComplete(false);
    setIsManuallyPaused(false);
    setIsTimerPaused(false);
  }

  function startQuizForCurrentModule() {
    if (!selectedModule) return;

    rememberCardPosition(selectedModule.id, selectedModule.words.length - 1, {
      syncImmediately: true,
    });
    markModuleCompleted(selectedModule, "completed (flashcard)");
    setLearnedWords((currentLearnedWords) => {
      const updatedLearnedWords = { ...currentLearnedWords };

      selectedModule.words.forEach((word) => {
        updatedLearnedWords[word.id] = true;
      });

      return updatedLearnedWords;
    });
    setIsFlipped(false);
    setHasSeenTranslation(false);
    setIsCurrentQuizComplete(false);
    setMode("quiz");
  }

  function handleQuizComplete() {
    if (!selectedModule || isCurrentQuizComplete) return;

    const completionLog = finishCurrentActivityLog("completed (quiz)", {
      syncImmediately: true,
    });

    if (!completionLog) {
      appendActivityLog(createInstantActivityLog(selectedModule.id, "completed (quiz)"), {
        syncImmediately: true,
      });
    }

    setIsCurrentQuizComplete(true);
  }

  function markCurrentWordAsLearned() {
    if (!selectedModule) return;
    const currentWord = selectedModule.words[cardIndex];
    setLearnedWords((currentLearnedWords) => ({
      ...currentLearnedWords,
      [currentWord.id]: true,
    }));

    if (cardIndex === selectedModule.words.length - 1) {
      startQuizForCurrentModule();
    }
  }

  function moveCard(direction) {
    if (!selectedModule) return;

    if (direction > 0 && !hasSeenTranslation) {
      return;
    }

    if (direction > 0) {
      const currentWord = selectedModule.words[cardIndex];
      setLearnedWords((currentLearnedWords) => ({
        ...currentLearnedWords,
        [currentWord.id]: true,
      }));
    }

    if (direction > 0 && cardIndex === selectedModule.words.length - 1) {
      startQuizForCurrentModule();
      return;
    }

    const nextIndex = Math.min(
      Math.max(cardIndex + direction, 0),
      selectedModule.words.length - 1
    );

    setCardIndex(nextIndex);
    rememberCardPosition(selectedModule.id, nextIndex, {
      syncImmediately: true,
    });
    setIsFlipped(false);
    setHasSeenTranslation(false);
  }

  function goHome() {
    if (selectedModuleId) {
      rememberCardPosition(selectedModuleId, cardIndex, { syncImmediately: true });
    }

    finishCurrentActivityLog("incomplete");
    setMode("home");
    setSelectedModuleId(null);
    setIsFlipped(false);
    setHasSeenTranslation(false);
    setIsCurrentQuizComplete(false);
    setIsManuallyPaused(false);
    setIsTimerPaused(false);
  }

  function toggleManualPause() {
    setIsManuallyPaused((currentValue) => {
      const nextValue = !currentValue;

      if (nextValue) {
        setIsTimerPaused(true);
        startActivityLog("paused", selectedModuleId);
      } else {
        finishCurrentActivityLog("paused");
        lastActivityAtRef.current = Date.now();
        setIsTimerPaused(false);
      }

      return nextValue;
    });
  }

  function pronounceCurrentSpanishWord() {
    if (!currentWord || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentWord.spanish);
    utterance.lang = "es-ES";
    utterance.rate = 0.82;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }

  function goToNextModule() {
    if (!selectedModule) return;

    const currentModuleIndex = modules.findIndex(
      (module) => module.id === selectedModule.id
    );
    const nextModule = modules[currentModuleIndex + 1];

    if (!nextModule) {
      goHome();
      return;
    }

    openModule(nextModule.id);
  }

  async function submitProlificId(event) {
    event.preventDefault();

    const trimmedProlificId = prolificId.trim();
    const trimmedNickname = nickname.trim();

    if (!trimmedProlificId || !trimmedNickname) return;

    try {
      await initializeParticipantSession(trimmedProlificId, trimmedNickname);
    } catch (error) {
      console.error("Could not start participant session:", error);
      setMode("challenge");
    }
  }

  if (mode === "prolific") {
    return (
      <main className="app-shell leading-shell">
        <section className="leading-page prolific-page">
          <span className="eyebrow">Spanish Learning</span>
          <h1 className="leading-title">Enter your study details</h1>
          <form
            className="prolific-form"
            onSubmit={submitProlificId}
            autoComplete="off"
          >
            <label htmlFor="prolific-id">Prolific ID</label>
            <input
              id="prolific-id"
              name="prolific-id"
              type="text"
              value={prolificId}
              onChange={(event) => setProlificId(event.target.value)}
              autoComplete="new-password"
              data-lpignore="true"
              data-form-type="other"
              required
            />
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              autoComplete="new-password"
              data-lpignore="true"
              data-form-type="other"
              required
            />
            <button
              className="primary-button leading-button"
              type="submit"
              disabled={!prolificId.trim() || !nickname.trim()}
            >
              Continue
            </button>
          </form>
        </section>
      </main>
    );
  }

  if (mode === "challenge") {
    return (
      <main className="app-shell leading-shell">
        <section className="leading-page challenge-page">
          <span className="eyebrow">10-Day Challenge</span>
          <h1 className="leading-title">
            Goal Achievement Challenge:
            <span>Earn Amazon Giftcards</span>
          </h1>
          <div className="copy-card">
            <p>
              You are part of the “10-day challenge” game to win bonus credits if
              you complete the goal. You have chosen to commit to{" "}
              <strong>
                {usesTwoModuleChallenge
                  ? "a daily learning goal of 30 minutes (2 modules) per day."
                  : "a daily learning goal of 15 minutes (1 module) per day."}
              </strong>
            </p>
            {isHeadstartSite ? (
              <p className="challenge-rule-highlight">
                If you complete more than the designated learning time on a given
                day, any extra learning time is carried over to the next day's
                progress.
              </p>
            ) : (
              <p className="challenge-rule-highlight">
                If you are unable to complete the designated learning time in a
                given day, that day’s goal is marked as “failed,” and your goal
                for the next day remains the same.
              </p>
            )}
            <p>
              For example, if today’s goal is 30
              minutes (2 modules) and you only complete 15 minutes (1 module), then
              today's goal is marked as “failed,” and tomorrow’s goal is still 30
              minutes (2 modules).
            </p>
            {isHeadstartSite ? (
              <p>
                Any extra learning time is carried over to next day's progress,
                which means{" "}
                <strong>
                  completing extra modules early helps protect you against busier,
                  lower-energy, or less-motivated days later
                </strong>
                .
              </p>
            ) : (
              <p>
                Any learning time completed beyond or under the daily goal does
                not influence future goals, which means each day's target must be
                met independently regardless of progress made in previous days.
              </p>
            )}
            <p>
              If you complete your daily goal in each of the 10 days, you finish
              this 10-day challenge and{" "}
              <strong>
                {usesTwoModuleChallenge
                  ? "receive an Amazon giftcard: $8."
                  : "receive an Amazon giftcard: $4."}
              </strong>
            </p>
          </div>
          <img
            className="challenge-example-image"
            src={isHeadstartSite ? "/head-start.png" : "/rigid.png"}
            alt="Example 2 modules per day challenge progress chart"
          />
          <button
            className="primary-button leading-button"
            type="button"
            onClick={() => {
              if (!challengeStartDate) {
                const startDate = getLocalDateString();
                localStorage.setItem(CHALLENGE_START_STORAGE_KEY, startDate);
                setChallengeStartDate(startDate);
              }

              setMode("home");
            }}
          >
            Start your challenge
          </button>
        </section>
      </main>
    );
  }

  if (mode === "home" || !selectedModule) {
    const today = getLocalDateString();
    const challengeStart = challengeStartDate || today;
    const dateBasedDayIndex = Math.min(
      Math.max(getDayDifference(challengeStart, today), 0),
      CHALLENGE_DAYS - 1
    );
    const activeDayIndex = Math.max(dateBasedDayIndex, 0);
    const dailyModuleTarget = usesTwoModuleChallenge ? 2 : DAILY_MODULE_TARGET;

    const progressDays = Array.from({ length: CHALLENGE_DAYS }, (_, dayIndex) => {
      const dayDate = addDays(challengeStart, dayIndex);
      const completeCount = modules.filter(
        (module) => moduleCompletionDates[module.id] === dayDate
      ).length;
      const isPastDay = dayDate < today || dayIndex < activeDayIndex;
      const isSuccessful = completeCount >= dailyModuleTarget;
      const isFailed = !isSuccessful && isPastDay;
      const boxStates = Array.from({ length: dailyModuleTarget }, (_, boxIndex) =>
        boxIndex < Math.min(completeCount, dailyModuleTarget) ? "filled" : ""
      );
      const isPending = !isSuccessful && !isFailed && dayIndex === activeDayIndex;
      const statusLabel = isSuccessful
        ? "Successful"
        : isFailed
          ? "Failed"
          : isPending
            ? "Pending"
            : "";
      const statusClass = isSuccessful
        ? "successful"
        : isFailed
          ? "failed"
          : isPending
            ? "pending"
            : "";

      return {
        dayNumber: dayIndex + 1,
        moduleRangeLabel: `(Modules ${dayIndex * dailyModuleTarget + 1}-${
          dayIndex * dailyModuleTarget + dailyModuleTarget
        })`,
        completeCount,
        boxStates,
        isActiveDay: dayIndex === activeDayIndex,
        isSuccessful,
        isFailed,
        isPending,
        statusLabel,
        statusClass,
      };
    });

    return (
      <main className="app-shell">
        <section className="hero">
          <div>
            <h1>Spanish Learning</h1>
            <p>Learn essential Spanish words for simple communication</p>
          </div>
          <aside className="learning-progress-card" aria-label="Learning progress example">
            <div className="learning-progress-title">
              <span className="progress-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <div className="learning-progress-heading">
                <strong>Learning Progress</strong>
                <span>Today is Day {activeDayIndex + 1}</span>
              </div>
            </div>
            <div
              className={`daily-target-card ${
                usesTwoModuleChallenge ? "two-module-target" : ""
              }`}
            >
              <h2>
                Daily target: {dailyModuleTarget}{" "}
                {dailyModuleTarget === 1 ? "module" : "modules"} per day
              </h2>
              <div className="progress-days">
                {progressDays.map((day) => (
                  <div
                    className={`progress-day ${day.isFailed ? "failed" : ""}`}
                    key={day.dayNumber}
                  >
                    <div className="day-boxes" aria-hidden="true">
                      {day.isActiveDay && <i className="active-day-arrow" />}
                      {Array.from({ length: DAILY_VISUAL_BLOCKS }, (_, boxIndex) => (
                        <span
                          className={day.boxStates[boxIndex] || ""}
                          key={boxIndex}
                        />
                      ))}
                    </div>
                    <strong>Day {day.dayNumber}</strong>
                    <span>Target: {dailyModuleTarget}</span>
                    <span>Completed: {day.completeCount}</span>
                    <span className={`progress-status ${day.statusClass}`}>
                      {day.statusLabel}
                    </span>
                  </div>
                ))}
              </div>
              <p className="progress-note">
                Once you complete the daily goal of each of the 10 days, you will
                receive a reward of $
                {usesTwoModuleChallenge ? "8" : "4"} Amazon giftcard.
              </p>
            </div>
          </aside>
        </section>

        <section className="module-grid" aria-label="Learning modules">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              learnedCount={getLearnedCount(module)}
              onOpen={() => openModule(module.id)}
            />
          ))}
        </section>
      </main>
    );
  }

  const currentWord = selectedModule.words[cardIndex];
  const currentLearnedCount = getLearnedCount(selectedModule);
  const currentModuleIndex = modules.findIndex(
    (module) => module.id === selectedModule.id
  );
  const nextModule = modules[currentModuleIndex + 1];

  return (
    <main className="app-shell module-shell">
      <header
        className={`module-header ${
          selectedModule.title === "Module 3" ? "featured-module-header" : ""
        }`}
      >
        <button className="text-button" type="button" onClick={goHome}>
          Back home
        </button>
        <div className="module-title-group">
          <span className="eyebrow">{selectedModule.title}</span>
          <h1>{selectedModule.theme}</h1>
          <p className="module-time">
            Module time: {formatTime(moduleTimeSeconds[selectedModule.id] || 0)}
            {isTimerPaused ? " (paused)" : ""}
          </p>
        </div>
        <div className="mode-switch" aria-label="Study mode">
          <button
            className={mode === "module" ? "active" : ""}
            type="button"
            onClick={() => {
              setIsCurrentQuizComplete(false);
              setMode("module");
            }}
          >
            Flashcards
          </button>
          <button
            className={mode === "quiz" ? "active" : ""}
            type="button"
            onClick={() => {
              setIsCurrentQuizComplete(false);
              setMode("quiz");
            }}
          >
            Quiz
          </button>
        </div>
      </header>

      <ProgressBar
        value={currentLearnedCount}
        max={selectedModule.words.length}
        label={`${currentLearnedCount} of ${selectedModule.words.length} learned`}
      />

      {mode === "quiz" ? (
        <Quiz
          module={selectedModule}
          allWords={allWords}
          nextModuleTitle={nextModule?.title}
          onGoToNextModule={goToNextModule}
          onFinishFinalModule={goHome}
          onQuizComplete={handleQuizComplete}
        />
      ) : (
        <section className="study-panel" aria-label={`${selectedModule.title} flashcards`}>
          <div className="card-count">
            Card {cardIndex + 1} of {selectedModule.words.length}
          </div>
          <Flashcard
            word={currentWord}
            isFlipped={isFlipped}
            onPronounce={pronounceCurrentSpanishWord}
          />
          <div className="controls">
            <button
              type="button"
              onClick={() => {
                setIsFlipped((flipped) => {
                  const nextFlipped = !flipped;
                  if (nextFlipped) {
                    setHasSeenTranslation(true);
                  }
                  return nextFlipped;
                });
              }}
            >
              Flip
            </button>
            <button type="button" onClick={() => moveCard(-1)}>
              Previous
            </button>
            <button
              type="button"
              onClick={() => moveCard(1)}
              disabled={!hasSeenTranslation}
            >
              {hasSeenTranslation && cardIndex === selectedModule.words.length - 1
                ? "Start Quiz"
                : "Next"}
            </button>
            <button type="button" onClick={toggleManualPause}>
              {isManuallyPaused ? "Resume" : "Pause"}
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
