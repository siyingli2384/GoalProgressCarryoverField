function Flashcard({ word, isFlipped, onPronounce }) {
  return (
    <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
      <span className="flashcard-label">{isFlipped ? "English" : "Spanish"}</span>
      <strong>{isFlipped ? word.english : word.spanish}</strong>
      {word.pronunciation && !isFlipped && (
        <span className="pronunciation">{word.pronunciation}</span>
      )}
      {word.example && (
        <p className="example-sentence">
          <b>Ejemplo:</b> {isFlipped ? word.example.english : word.example.spanish}
        </p>
      )}
      {!isFlipped && (
        <button className="pronunciation-button" type="button" onClick={onPronounce}>
          Listen
        </button>
      )}
    </div>
  );
}

export default Flashcard;
