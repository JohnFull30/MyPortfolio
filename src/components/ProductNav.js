function ProductNav() {
  const PUBLIC = process.env.PUBLIC_URL;

  return (
    <nav className="product-nav">
      <div className="product-logo-row">
        <a
          href="/MyPortfolio/"
          className="product-logo-link"
          aria-label="John Fuller portfolio home"
        >
          <img src={`${PUBLIC}/logo-f.png`} alt="John Fuller logo" />
        </a>
      </div>

      <div className="product-nav-links">
        <a href="#/projects/HabitSquares">HabitSquares</a>
        <a href="#/projects/HabitSquares/privacy">Privacy</a>
        <a href="#/projects/HabitSquares/support">Support</a>
      </div>
    </nav>
  );
}

export default ProductNav;
