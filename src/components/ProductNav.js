import PortfolioLogoLink from "./PortfolioLogoLink.js";

const defaultLinks = [
  { href: "#/projects/habitsquares", label: "HabitSquares" },
  { href: "#/projects/habitsquares/privacy", label: "Privacy" },
  { href: "#/projects/habitsquares/support", label: "Support" },
];

function ProductNav({ links = defaultLinks, logoLinkProps }) {
  return (
    <nav className="product-nav" aria-label="HabitSquares navigation">
      <div className="product-logo-row">
        <PortfolioLogoLink {...logoLinkProps} />
      </div>

      <ul className="product-nav-links nav-list">
        {links.map(({ href, label }) => (
          <li key={`${href}-${label}`}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ProductNav;
