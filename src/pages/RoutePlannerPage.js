import ProductNav from "../components/ProductNav";

export default function RoutePlannerPage() {
  return (
    <main className="product-page route-planner-page">
      <ProductNav
        logoLinkProps={{ href: "#/" }}
        links={[
          { href: "#/", label: "Portfolio" },
          { href: "#/projects/routeplanner", label: "Route Planner" },
          { href: "mailto:johnathanfuller0@gmail.com?subject=Route%20Planner", label: "Contact" },
        ]}
      />
      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">Project overview</p>
          <h1>Route Planner</h1>
          <p className="product-subtitle">Every journey starts with a plan.</p>
          <p className="product-description">
            A route-planning project from Pierre Fuller Labs. More details about
            the app, its features and the thinking behind it are coming soon.
          </p>
          <div className="product-actions">
            <a className="primary-button" href="mailto:johnathanfuller0@gmail.com?subject=Route%20Planner">
              Get in touch
            </a>
            <a className="secondary-button" href="#/">Explore more projects</a>
          </div>
        </div>
        <figure className="route-planner-visual">
          <svg viewBox="0 0 480 400" role="img" aria-labelledby="route-illustration-title">
            <title id="route-illustration-title">Illustration of a journey connecting three stops</title>
            <defs>
              <pattern id="route-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 H 0 V 48" fill="none" stroke="currentColor" strokeOpacity="0.09" />
              </pattern>
            </defs>
            <rect width="480" height="400" fill="url(#route-grid)" />
            <path d="M -20 280 L 500 80 M 100 -20 L 300 420 M -20 90 L 500 310" fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="20" />
            <path d="M 90 300 V 200 Q 90 170 120 170 H 290 Q 320 170 320 140 V 90 H 390" fill="none" stroke="#34c759" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            {[ [90, 300], [230, 170], [390, 90] ].map(([cx, cy], index) => (
              <g key={index}>
                <circle cx={cx} cy={cy} r="19" fill="var(--text-strong)" />
                <text x={cx} y={cy + 5} textAnchor="middle" fill="var(--page-label-color)" fontSize="14" fontWeight="700">{index + 1}</text>
              </g>
            ))}
          </svg>
          <figcaption>A journey, at a glance · Concept illustration</figcaption>
        </figure>
      </section>
      <section className="product-section route-planner-details">
        <p className="eyebrow">More to come</p>
        <h2>A closer look is on the way.</h2>
        <p>App screenshots, project details and release information will be shared here when available.</p>
      </section>
    </main>
  );
}
