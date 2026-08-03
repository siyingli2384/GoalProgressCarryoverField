import { useMemo, useState } from "react";

const PASSING_SCORE = 9;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function uniqueEnglishOptions(words) {
  const seenOptions = new Set();

  return words.filter((word) => {
    if (seenOptions.has(word.english)) return false;

    seenOptions.add(word.english);
    return true;
  });
}

function Quiz({
  module,
  allWords,
  nextModuleTitle,
  onGoToNextModule,
  onFinishFinalModule,
  onQuizComplete,
  onRelearnModule,
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [quizRun, setQuizRun] = useState(0);

  const currentWord = module.words[questionIndex];

  const optionsByQuestion = useMemo(
    () =>
      module.words.map((word) => {
        const sameModuleDistractors = shuffle(
          uniqueEnglishOptions(module.words.filter((item) => item.id !== word.id))
        );
        const fallbackDistractors = shuffle(
          uniqueEnglishOptions(
            allWords.filter(
              (item) =>
                item.id !== word.id &&
                item.english !== word.english &&
                !sameModuleDistractors.some(
                  (distractor) => distractor.english === item.english
                )
            )
          )
        );
        const distractors = [...sameModuleDistractors, ...fallbackDistractors]
          .slice(0, 3)
          .map((item) => item.english);

        return shuffle([word.english, ...distractors]);
      }),
    [allWords, module.words, quizRun]
  );

  const options = optionsByQuestion[questionIndex] || [];
  const hasSelectedAnswer = Boolean(selectedAnswer);
  const isCurrentAnswerCorrect = selectedAnswer === currentWord.english;
  const hasPassed = score >= PASSING_SCORE;

  function chooseAnswer(answer) {
    if (isAnswerSubmitted) return;

    setSelectedAnswer(answer);
    setFeedback("");
  }

  function submitAnswer() {
    if (!hasSelectedAnswer || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);

    if (selectedAnswer === currentWord.english) {
      setFeedback("You are correct");
      setScore((currentScore) => currentScore + 1);
      return;
    }

    setFeedback("You are incorrect");
  }

  function goToNextQuestion() {
    if (!isAnswerSubmitted) {
      setFeedback("Submit your answer to continue.");
      return;
    }

    if (questionIndex === module.words.length - 1) {
      if (hasPassed) {
        onQuizComplete();
      }

      setIsComplete(true);
      return;
    }

    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer("");
    setFeedback("");
    setIsAnswerShown(false);
    setIsAnswerSubmitted(false);
  }

  function retakeQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setFeedback("");
    setScore(0);
    setIsAnswerShown(false);
    setIsAnswerSubmitted(false);
    setIsComplete(false);
    setQuizRun((currentRun) => currentRun + 1);
  }

  if (isComplete) {
    return (
      <section
        className="quiz-panel quiz-complete"
        aria-label={`${module.title} quiz complete`}
      >
        <span className="eyebrow">Quiz complete</span>
        <h2>{hasPassed ? "You passed" : "Please try again"}</h2>
        <p>
          Score: <strong>{score}</strong> / {module.words.length}
        </p>
        <p className={hasPassed ? "quiz-result passed" : "quiz-result failed"}>
          {hasPassed
            ? "You passed this quiz and can continue."
            : `You need ${PASSING_SCORE} or more correct answers to pass.`}
        </p>
        {hasPassed ? (
          <button
            className="primary-button"
            type="button"
            onClick={nextModuleTitle ? onGoToNextModule : onFinishFinalModule}
          >
            {nextModuleTitle ? `Go to ${nextModuleTitle}` : "Back home"}
          </button>
        ) : (
          <div className="quiz-retry-actions">
            <button className="secondary-button" type="button" onClick={retakeQuiz}>
              Retake quiz
            </button>
            <button className="primary-button" type="button" onClick={onRelearnModule}>
              Relearn flashcards
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="quiz-panel" aria-label={`${module.title} quiz`}>
      <div className="quiz-header">
        <div>
          <span className="eyebrow">Quiz mode</span>
          <h2>{currentWord.spanish}</h2>
        </div>
        <div className="score">
          Score <strong>{score}</strong> / {module.words.length}
        </div>
      </div>

      <div className="answer-grid">
        {options.map((option) => {
          const isCorrectOption = option === currentWord.english;
          const shouldShowCorrect = isAnswerShown && isCorrectOption;

          return (
            <button
              className={`answer-button ${
                selectedAnswer === option ? "selected" : ""
              } ${shouldShowCorrect ? "correct-answer" : ""}`}
              key={option}
              type="button"
              onClick={() => chooseAnswer(option)}
              disabled={isAnswerSubmitted}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="quiz-footer">
        {feedback && (
          <p
            className={`feedback ${
              feedback === "You are correct" ? "correct" : "incorrect"
            }`}
          >
            {feedback}
          </p>
        )}
        {hasSelectedAnswer && !isAnswerSubmitted && (
          <button className="primary-button" type="button" onClick={submitAnswer}>
            Submit your answer
          </button>
        )}
        {isAnswerSubmitted && (
          <div className="quiz-action-row">
            {!isCurrentAnswerCorrect && (
              <button
                className="secondary-button"
                type="button"
                onClick={() => setIsAnswerShown(true)}
              >
                Show the answer
              </button>
            )}
            <button
              className="secondary-button"
              type="button"
              onClick={goToNextQuestion}
            >
              {questionIndex === module.words.length - 1
                ? "Finish quiz"
                : "Next question"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;
