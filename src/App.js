import { useEffect, useState } from "react";
import "./App.css";

const habitsquaresEmail = "habitsquaresapp@gmail.com";

function getRouteFromHash() {
  const hash = window.location.hash;

  if (hash.startsWith("#/")) {
    return hash.slice(1);
  }

  return "/";
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "/projects/habitsquares") {
    return <HabitSquaresPage />;
  }

  if (route === "/projects/habitsquares/privacy") {
    return <HabitSquaresPrivacyPage />;
  }

  if (route === "/projects/habitsquares/support") {
    return <HabitSquaresSupportPage />;
  }

  return <PortfolioHome />;
}

function PortfolioHome() {
  const PUBLIC = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <nav className="nav" id="navbar">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section" className="welcome-section">
        <h1>John Fuller</h1>
        <p>Web Developer & Graphic Designer</p>
        <img src={`${PUBLIC}/logo-f.png`} alt="Logo F" className="hero-logo" />
      </section>

      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-container">
          <img
            src={`${PUBLIC}/logo-f.png`}
            alt="Watermark F"
            className="projects-watermark"
          />

          <div className="projects-grid">
            <a
              href="#/projects/habitsquares"
              className="project-card project-card-featured"
            >
              <div className="habit-card-preview" aria-hidden="true">
                <div className="mini-heatmap">
                  {Array.from({ length: 42 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        [2, 3, 10, 14, 17, 22, 26, 29, 34, 39].includes(index)
                          ? "mini-square active"
                          : "mini-square"
                      }
                    />
                  ))}
                </div>
              </div>
              <p>
                <em>HabitSquares</em>
              </p>
            </a>

            <a
              href="https://johnfull30.github.io/gt/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${PUBLIC}/gotobago.jpg`} alt="GoTobago Tours" />
              <p>
                <em>GoTobago Tours</em>
              </p>
            </a>

            <a
              href="https://johnfull30.github.io/f2t/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${PUBLIC}/farm2table.jpg`} alt="Farm2Table" />
              <p>
                <em>Farm2Table</em>
              </p>
            </a>

            <a
              href="https://johnfull30.github.io/countdown/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${PUBLIC}/countdown.jpg`}
                alt="Gender Reveal Countdown"
              />
              <p>
                <em>Gender Reveal Countdown</em>
              </p>
            </a>

            <a
              href="https://johnfull30.github.io/holistic-herbs/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={`${PUBLIC}/holistic-herbs.jpg`} alt="Holistic Herbs" />
              <p>
                <em>Holistic Herbs</em>
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Let's work together...</h2>
        <p>
          <em>How do you like your code?</em>
        </p>
        <div className="contact-buttons">
          <a
            href="https://www.linkedin.com/in/john-fuller-03044322a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JohnFull30"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:johnathanfuller0@gmail.com">
            johnathanfuller0@gmail.com
          </a>
          <a href="tel:9199876632">(919)-987-6632</a>
        </div>
      </section>
    </div>
  );
}

function HabitSquaresPage() {
  const PUBLIC = process.env.PUBLIC_URL;

  const features = [
    "GitHub-style habit heatmaps",
    "Multiple habits",
    "Multiple Apple Reminders per habit",
    "Required vs optional reminders",
    "Daily completion summaries",
    "Widget-ready progress",
    "Local-first storage",
    "Built for iOS 17+",
  ];

  const techStack = [
    "SwiftUI",
    "Core Data",
    "EventKit Reminders",
    "WidgetKit",
    "App Groups",
    "iOS 17+",
    "Future CloudKit sync",
  ];

  return (
    <main className="product-page habitsquares-page">
      <ProductNav />

      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">iOS habit tracker · Portfolio case study</p>
          <h1>HabitSquares</h1>
          <p className="product-subtitle">
            A visual habit tracker powered by Apple Reminders.
          </p>
          <p className="product-description">
            Track habits with GitHub-style heatmaps. Link multiple reminders to
            each habit and see your day turn green only when the required
            reminders are complete.
          </p>

          <div className="product-actions">
            <a href="#demo" className="primary-button">
              View Demo
            </a>
            <a
              href={`mailto:${habitsquaresEmail}?subject=HabitSquares TestFlight Access`}
              className="secondary-button"
            >
              Request TestFlight Access
            </a>
            <a href="#/projects/habitsquares/privacy" className="text-button">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="hero-device-card">
          <div className="app-icon-card">
            <span>HabitSquares</span>
          </div>

          <div className="floating-habit-card">
            <div>
              <h3>Drink Water</h3>
              <p>No reminders</p>
            </div>
            <HeatmapPreview />
          </div>

          <div className="floating-habit-card offset">
            <div>
              <h3>Take A Walk</h3>
              <p>1 left</p>
            </div>
            <HeatmapPreview variant="sparse" />
          </div>
        </div>
      </section>

      <section id="demo" className="product-section">
        <div className="section-heading">
          <p className="eyebrow">Preview</p>
          <h2>Designed to feel calm, visual, and native to iOS.</h2>
          <p>
            HabitSquares turns everyday reminder completion into a simple visual
            record of consistency.
          </p>
        </div>

        <div className="screenshot-grid">
          <PreviewPanel
            image={`${PUBLIC}/habitsquares-app.png`}
            title="Habit heatmap"
            description="See each habit as a simple progress card with clear daily completion."
          />
          <PreviewPanel
            image={`${PUBLIC}/habitsquares-widgets.png`}
            title="Today widget"
            description="Keep habit progress visible from the Home Screen with lightweight widget snapshots."
          />
        </div>
      </section>

      <section className="product-section split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Progress turns green when the required reminders are done.</h2>
          <p>
            HabitSquares connects your habits to the reminder system already
            built into iOS, then translates completion into an easy-to-read
            heatmap.
          </p>
        </div>

        <div className="steps-list">
          <StepCard number="01" title="Create a habit" />
          <StepCard number="02" title="Link Apple Reminders" />
          <StepCard number="03" title="Complete the required reminders" />
          <StepCard number="04" title="Watch the day turn green" />
        </div>
      </section>

      <section className="product-section">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>Built like a real product, not just a demo.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature}>
              <span className="feature-dot" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="product-section privacy-band">
        <div>
          <p className="eyebrow">Privacy-first</p>
          <h2>No accounts. No ads. No tracking.</h2>
        </div>

        <div className="privacy-points">
          <p>
            HabitSquares is local-first. Habit and reminder data stays on the
            device unless future iCloud sync is added.
          </p>
          <p>
            Apple Reminders access is permission-based and only used to
            calculate habit completion.
          </p>
          <p>
            Widgets use a small local App Group snapshot to show habit status.
            Future sync would use Apple CloudKit, not a custom backend.
          </p>
        </div>
      </section>

      <section className="product-section split-section">
        <div>
          <p className="eyebrow">Built with</p>
          <h2>Apple frameworks with a local-first architecture.</h2>
          <p>
            The app demonstrates SwiftUI product design, persistence,
            permissions, Apple Reminders integration, widgets, and App Store
            readiness.
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="product-section case-study-card">
        <p className="eyebrow">Why I built it</p>
        <h2>Habit tracking should feel visual and connected to real life.</h2>
        <p>
          I built HabitSquares to make habit tracking feel visual, calm, and
          connected to the reminders people already use. Instead of checking off
          habits in a separate system, HabitSquares can connect to Apple
          Reminders and turn progress into a simple heatmap.
        </p>
        <p>
          As a portfolio project, it highlights product thinking, SwiftUI
          development, local persistence, Apple framework integration, widget
          architecture, privacy-focused design, and App Store launch planning.
        </p>
      </section>

      <section className="product-section roadmap-section">
        <div>
          <p className="eyebrow">Roadmap</p>
          <h2>Close to launch, built to grow carefully.</h2>
        </div>

        <div className="roadmap-grid">
          <RoadmapColumn
            title="Current"
            items={[
              "Core habit tracking",
              "Reminder linking",
              "Heatmap completion logic",
              "Widget preview/support",
              "Local-first storage",
            ]}
          />
          <RoadmapColumn
            title="Next"
            items={[
              "TestFlight feedback",
              "App Store launch",
              "iCloud sync",
              "More widget options",
              "More onboarding polish",
            ]}
          />
        </div>
      </section>

      <section className="product-cta">
        <p className="eyebrow">TestFlight</p>
        <h2>Want to test HabitSquares?</h2>
        <p>
          HabitSquares is preparing for TestFlight feedback before the App Store
          launch.
        </p>

        <div className="product-actions centered">
          <a
            href={`mailto:${habitsquaresEmail}?subject=HabitSquares TestFlight Access`}
            className="primary-button"
          >
            Contact for TestFlight Access
          </a>
          <a
            href="#/projects/habitsquares/support"
            className="secondary-button"
          >
            Support
          </a>
          <a href="#/projects/habitsquares/privacy" className="text-button">
            Privacy Policy
          </a>
        </div>
      </section>
    </main>
  );
}

function HabitSquaresPrivacyPage() {
  return (
    <main className="product-page legal-page">
      <ProductNav />

      <section className="legal-card">
        <p className="eyebrow">HabitSquares</p>
        <h1>HabitSquares Privacy Policy</h1>
        <p className="legal-date">Effective Date: May 8, 2026</p>

        <div className="legal-content">
          <p>
            HabitSquares is designed as a local-first habit tracking app.
            HabitSquares does not collect, sell, rent, or share personal data.
          </p>

          <p>
            HabitSquares does not use third-party advertising or tracking.
            HabitSquares currently does not use analytics.
          </p>

          <p>
            The app may store habit names, habit colors, completion history,
            linked reminder information, and app preferences locally on the
            user’s device.
          </p>

          <p>
            Apple Reminders access is optional and permission-based. Reminder
            data is used only to power habit completion features.
          </p>

          <p>
            Widgets may use a small local App Group snapshot to show today’s
            habit status.
          </p>

          <p>
            If iCloud sync is added in the future, data may sync through the
            user’s private iCloud account using Apple CloudKit.
          </p>

          <p>
            Contact:{" "}
            <a href={`mailto:${habitsquaresEmail}`}>{habitsquaresEmail}</a>
          </p>

          <p>This policy may be updated as the app changes.</p>
        </div>

        <div className="legal-links">
          <a href="#/projects/habitsquares">HabitSquares</a>
          <a href="#/projects/habitsquares/support">Support</a>
        </div>
      </section>
    </main>
  );
}

function HabitSquaresSupportPage() {
  return (
    <main className="product-page legal-page">
      <ProductNav />

      <section className="legal-card">
        <p className="eyebrow">HabitSquares</p>
        <h1>HabitSquares Support</h1>
        <p className="legal-date">
          Need help? Contact{" "}
          <a href={`mailto:${habitsquaresEmail}`}>{habitsquaresEmail}</a>.
        </p>

        <div className="support-list">
          <SupportItem
            title="Reminder permissions"
            description="Open Settings → Apps → HabitSquares → Reminders and allow access."
          />
          <SupportItem
            title="Widget refresh"
            description="Open the app, confirm the habit is linked correctly, then wait for the widget to refresh. iOS controls exact widget refresh timing."
          />
          <SupportItem
            title="Completion logic"
            description="A habit day is complete when all required linked reminders for that habit are completed on that day."
          />
          <SupportItem
            title="Data deletion"
            description="Delete habits inside the app or delete the app to remove local data."
          />
        </div>

        <div className="legal-links">
          <a href="#/projects/habitsquares">HabitSquares</a>
          <a href="#/projects/habitsquares/privacy">Privacy Policy</a>
        </div>
      </section>
    </main>
  );
}

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
        <a href="#/projects/habitsquares">HabitSquares</a>
        <a href="#/projects/habitsquares/privacy">Privacy</a>
        <a href="#/projects/habitsquares/support">Support</a>
      </div>
    </nav>
  );
}

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

function StepCard({ number, title }) {
  return (
    <div className="step-card">
      <span>{number}</span>
      <h3>{title}</h3>
    </div>
  );
}

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

function SupportItem({ title, description }) {
  return (
    <div className="support-item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
