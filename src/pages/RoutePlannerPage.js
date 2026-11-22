import BetaInterestForm, { scrollToBetaInterest } from "../components/BetaInterestForm";
import ProductNav from "../components/ProductNav";
import StepCard from "../components/StepCard";

const PUBLIC = process.env.PUBLIC_URL;

function RoutePlannerPreview() {
  return (
    <figure className="route-planner-preview">
      <div className="route-preview-screen" aria-hidden="true">
        <header className="route-preview-appbar">
          <img
            src={`${PUBLIC}/routeplanner-icon.svg`}
            alt=""
            width="44"
            height="44"
          />
          <div>
            <strong>Route Planner</strong>
            <span>Day plan · Saved</span>
          </div>
          <span className="route-preview-saved">✓ Saved</span>
        </header>

        <div className="route-preview-date">
          <strong>Monday, Nov 23</strong>
          <span>Change&nbsp; ›</span>
        </div>

        <section className="route-preview-ready">
          <p className="route-preview-kicker">Route ready</p>
          <h2>Ready when you are.</h2>
          <p className="route-preview-copy">
            5 destinations in your chosen order.
          </p>
          <div className="route-preview-map">
            <svg viewBox="0 0 560 230" role="img">
              <title>Sample route connecting five stops</title>
              <path
                className="route-map-street"
                d="M12 44h120l36 42h86l28-40h106l36 42h126M18 188h110l36-40h86l38 34h90l46-40h118M82 16v54l38 34v70M285 12v54l32 32v64M464 16v48l-30 36v68"
              />
              <path
                className="route-map-line"
                d="M72 178V130q0-18 18-18h112q18 0 18-18V73q0-18 18-18h89q18 0 18 18v36q0 18 18 18h78q18 0 18-18V72"
              />
              {[
                [72, 178],
                [220, 94],
                [329, 73],
                [365, 127],
                [443, 72],
              ].map(([cx, cy], index) => (
                <g key={index}>
                  <circle className="route-map-stop" cx={cx} cy={cy} r="15" />
                  <text
                    className="route-map-number"
                    x={cx}
                    y={cy + 5}
                    textAnchor="middle"
                  >
                    {index + 1}
                  </text>
                </g>
              ))}
            </svg>
            <div className="route-preview-map-legend">
              <span><i aria-hidden="true" /> Planned route</span>
              <span>5 stops</span>
            </div>
          </div>
          <div className="route-preview-start">
            <div>
              <strong>Start &amp; Return</strong>
              <span>Saved starting location&nbsp; → &nbsp;Back to start</span>
            </div>
            <small>Optional</small>
          </div>
          <div className="route-preview-button">Start route</div>
        </section>

        <div className="route-preview-jobs">
          <strong>Jobs <span>· 5</span></strong>
          <div className="route-preview-job-row">
            <span>01</span><b>First stop</b><small>Open in Maps ↗</small>
          </div>
          <div className="route-preview-job-row">
            <span>02</span><b>Next stop</b><small>Open in Maps ↗</small>
          </div>
        </div>
      </div>
      <figcaption>
        Interface preview with sample stops · No personal addresses shown
      </figcaption>
    </figure>
  );
}

export default function RoutePlannerPage() {
  return (
    <main className="product-page route-planner-page">
      <ProductNav
        logoLinkProps={{ href: "#/" }}
        links={[
          { href: "#/", label: "Portfolio" },
          { href: "#/projects/routeplanner", label: "Route Planner" },
          { href: "#/projects/routeplanner/privacy", label: "Privacy" },
          { href: "#/projects/routeplanner/support", label: "Support" },
        ]}
      />

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">Multi-stop route planner · In development</p>
          <img
            className="route-planner-icon"
            src={`${PUBLIC}/routeplanner-icon.svg`}
            alt="Route Planner app icon"
            width="80"
            height="80"
          />
          <h1>Route Planner</h1>
          <p className="product-subtitle">
            Turn a day of stops into a route you can follow.
          </p>
          <p className="product-description">
            Bring the day’s jobs together, arrange the stops, see the route on
            a map, and open each destination in Maps when it’s time to go.
          </p>
          <div className="product-actions">
            <button type="button" className="primary-button" onClick={scrollToBetaInterest}>Request beta access</button>
            <a className="primary-button" href="#/projects/routeplanner/support">
              Get support
            </a>
            <a className="secondary-button" href="#/projects/routeplanner/privacy">
              Privacy policy
            </a>
          </div>
        </div>
        <RoutePlannerPreview />
      </section>

      <BetaInterestForm appName="Route Planner" recipient="support@pierrefullerlabs.com" />

      <section className="product-section split-section route-planner-how">
        <div>
          <p className="eyebrow">Built for days in motion</p>
          <h2>See the plan before you start driving.</h2>
          <p>
            Route Planner keeps the job list and the day’s route together. Check
            the full sequence, choose how stops should be arranged, and keep
            navigation close at hand.
          </p>
        </div>
        <div className="steps-list">
          <StepCard number="01" title="Choose a day and add its job stops" />
          <StepCard number="02" title="Arrange stops and set an optional start and return" />
          <StepCard number="03" title="Review the route, then open a stop in Maps" />
        </div>
      </section>

      <section className="product-section route-planner-features">
        <div className="section-heading">
          <p className="eyebrow">The route at a glance</p>
          <h2>A practical view of the whole day.</h2>
          <p>
            Keep the important route details visible while you move from one
            destination to the next.
          </p>
        </div>
        <div className="feature-grid">
          {[
            "Plan multiple destinations for a selected day",
            "Arrange stops in the order that works for you",
            "See the route and stops together on a map",
            "Open a destination directly in Maps",
          ].map((feature) => (
            <div className="feature-card" key={feature}>
              <span className="feature-dot" aria-hidden="true" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="product-section route-planner-callout">
        <p className="eyebrow">In development</p>
        <h2>A clearer plan for the next stop.</h2>
        <p>
          Route Planner is being shaped around real multi-stop workdays. Release
          information will be added as the app moves forward.
        </p>
        <div className="product-actions">
          <a className="primary-button" href="#/projects/routeplanner/support">
            Contact support
          </a>
          <a className="secondary-button" href="#/projects/routeplanner/privacy">
            Privacy policy
          </a>
        </div>
      </section>
    </main>
  );
}
