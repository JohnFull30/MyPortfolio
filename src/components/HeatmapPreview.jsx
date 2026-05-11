function HeatmapPreview({ variant = "default" }) {
  const activeIndexes =
    variant === "sparse"
      ? [3, 4, 13, 17, 20, 25, 28, 33, 39]
      : [5, 6, 9, 12, 13, 16, 18, 23, 27, 30, 34, 35];

  return (
    <div className="heatmap-preview">
      {Array.from({ length: 42 }).map((_, index) => (
        <span
          key={index}
          className={activeIndexes.includes(index) ? "active" : ""}
        />
      ))}
    </div>
  );
}

export default HeatmapPreview;
