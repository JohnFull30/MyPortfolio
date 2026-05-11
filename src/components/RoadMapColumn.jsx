function RoadmapColumn({ title, items }) {
  return (
    <div className="roadmap-column">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoadmapColumn;
