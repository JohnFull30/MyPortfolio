function PreviewPanel({ image, title, description }) {
  return (
    <article className="preview-panel">
      <div className="screenshot-frame">
        <img src={image} alt={`${title} screenshot`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default PreviewPanel;
