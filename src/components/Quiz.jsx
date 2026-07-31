import { useMemo, useState } from "react";

const PASSING_SCORE = 9;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
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
  const [isComplete, setIsComplete] = useState(false);
  const [quizRun, setQuizRun] = useState(0);

  const currentWord = module.words[questionIndex];

  const optionsByQuestion = useMemo(
    () =>
      module.words.map((word) => {
        const distractors = shuffle(allWords.filter((item) => item.id !== word.id))
          .slice(0, 3)
          .map((item) => item.english);

        return shuffle([word.english, ...distractors]);
      }),
    [allWords, module.words, quizRun]
  );

  const options = optionsByQuestion[questionIndex] || [];
  const isQuestionAnswered = Boolean(selectedAnswer);
  const isCurrentAnswerCorrect = selectedAnswer === currentWord.english;
  const hasPassed = score >= PASSING_SCORE;

  function chooseAnswer(answer) {
    if (isQuestionAnswered) return;

    setSelectedAnswer(answer);

    if (answer === currentWord.english) {
      setFeedback("Correct");
      setScore((currentScore) => currentScore + 1);
      return;
    }

    setFeedback("");
  }

  function goToNextQuestion() {
    if (!isQuestionAnswered) {
      setFeedback("Choose one answer to continue.");
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
  }

  function retakeQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer("");
    setFeedback("");
    setScore(0);
    setIsAnswerShown(false);
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
              disabled={isQuestionAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="quiz-footer">
        <p
          className={`feedback ${
            feedback === "Correct" ? "correct" : "neutral"
          }`}
        >
          {feedback || "Choose the best English translation."}
        </p>
        {isQuestionAnswered && !isCurrentAnswerCorrect && (
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
          disabled={!isQuestionAnswered}
        >
          {questionIndex === module.words.length - 1 ? "Finish quiz" : "Next question"}
        </button>
      </div>
    </section>
  );
}

export default Quiz;
