import ThemeLogo from "./ThemeLogo.js";

function PortfolioLogoLink({
  href = "/MyPortfolio/",
  ariaLabel = "John Fuller portfolio home",
  logoAlt = "John Fuller logo",
  className = "",
  logoClassName = "",
  logoMode = "auto",
}) {
  const classes = ["portfolio-logo-link", className].filter(Boolean).join(" ");

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      <ThemeLogo alt={logoAlt} className={logoClassName} mode={logoMode} />
    </a>
  );
}

export default PortfolioLogoLink;
