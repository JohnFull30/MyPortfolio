function StepCard({ number, title }) {
  return (
    <div className="step-card">
      <span>{number}</span>
      <h3>{title}</h3>
    </div>
  );
}

export default StepCard;
