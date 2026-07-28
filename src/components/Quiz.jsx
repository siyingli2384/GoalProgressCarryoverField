import { useMemo, useState } from "react";

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
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentWord = module.words[questionIndex];

  const options = useMemo(() => {
    const distractors = shuffle(
      allWords.filter((word) => word.id !== currentWord.id)
    )
      .slice(0, 3)
      .map((word) => word.english);

    return shuffle([currentWord.english, ...distractors]);
  }, [allWords, currentWord]);

  function checkAnswer(answer) {
    setSelectedAnswer(answer);

    if (answer === currentWord.english) {
      setFeedback("Correct");
      if (!answeredCorrectly) {
        setScore((currentScore) => currentScore + 1);
      }
      setAnsweredCorrectly(true);
      return;
    }

    setFeedback("Try again");
  }

  function goToNextQuestion() {
    if (!answeredCorrectly) {
      setFeedback("Choose the correct answer to continue.");
      return;
    }

    if (questionIndex === module.words.length - 1) {
      onQuizComplete();
      setIsComplete(true);
      return;
    }

    setQuestionIndex((currentIndex) => (currentIndex + 1) % module.words.length);
    setSelectedAnswer("");
    setFeedback("");
    setAnsweredCorrectly(false);
  }

  if (isComplete) {
    return (
      <section className="quiz-panel quiz-complete" aria-label={`${module.title} quiz complete`}>
        <span className="eyebrow">Quiz complete</span>
        <h2>{module.title} finished</h2>
        <p>
          Score: <strong>{score}</strong> / {module.words.length}
        </p>
        <button
          className="primary-button"
          type="button"
          onClick={nextModuleTitle ? onGoToNextModule : onFinishFinalModule}
        >
          {nextModuleTitle ? `Go to ${nextModuleTitle}` : "Back home"}
        </button>
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
        {options.map((option) => (
          <button
            className={`answer-button ${
              selectedAnswer === option ? "selected" : ""
            }`}
            key={option}
            type="button"
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="quiz-footer">
        <p
          className={`feedback ${
            feedback === "Correct" ? "correct" : feedback ? "" : "neutral"
          }`}
        >
          {feedback || "Choose the best English translation."}
        </p>
        <button
          className="secondary-button"
          type="button"
          onClick={goToNextQuestion}
          disabled={!answeredCorrectly}
        >
          {questionIndex === module.words.length - 1 ? "Finish quiz" : "Next question"}
        </button>
      </div>
    </section>
  );
}

export default Quiz;
