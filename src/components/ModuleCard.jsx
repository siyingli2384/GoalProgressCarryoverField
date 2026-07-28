import ProgressBar from "./ProgressBar.jsx";

function ModuleCard({ module, learnedCount, onOpen }) {
  return (
    <button className="module-card" type="button" onClick={onOpen}>
      <span className="module-number">{module.title}</span>
      <h2>{module.theme}</h2>
      <p>{module.words.length} words</p>
      <ProgressBar
        value={learnedCount}
        max={module.words.length}
        label={`${learnedCount} learned`}
      />
    </button>
  );
}

export default ModuleCard;
