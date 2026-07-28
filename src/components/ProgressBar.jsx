function ProgressBar({ value, max, label }) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="progress-wrap" aria-label={label}>
      <div className="progress-label">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
