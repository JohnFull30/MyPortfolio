import ThemeLogo from "./ThemeLogo.js";

function ProductNav() {
  return (
    <nav className="product-nav">
      <div className="product-logo-row">
        <a
          href="/MyPortfolio/"
          className="product-logo-link"
          aria-label="John Fuller portfolio home"
        >
          <ThemeLogo alt="John Fuller logo" />
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
