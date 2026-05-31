import PortfolioLogoLink from "./PortfolioLogoLink.js";

const defaultLinks = [
  { href: "#/projects/habitsquares", label: "HabitSquares" },
  { href: "#/projects/habitsquares/privacy", label: "Privacy" },
  { href: "#/projects/habitsquares/support", label: "Support" },
];

function ProductNav({ links = defaultLinks, logoLinkProps }) {
  return (
    <nav className="product-nav">
      <div className="product-logo-row">
        <PortfolioLogoLink {...logoLinkProps} />
      </div>

      <div className="product-nav-links">
        {links.map(({ href, label }) => (
          <a href={href} key={`${href}-${label}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default ProductNav;
