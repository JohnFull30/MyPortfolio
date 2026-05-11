import ProductNav from "../components/ProductNav";
import HeatmapPreview from "../components/HeatmapPreview";
import PreviewPanel from "../components/PreviewPanel";
import StepCard from "../components/StepCard";
import RoadmapColumn from "../components/RoadMapColumn";

import {
  habitsquaresEmail,
  habitSquaresFeatures,
  habitSquaresTechStack,
  habitSquaresCurrentRoadmapItems,
  habitSquaresNextRoadmapItems,
} from "../constants/habitsquares";

function HabitSquaresPage() {
  const PUBLIC = process.env.PUBLIC_URL;

  return (
    <main className="product-page">
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
          {habitSquaresFeatures.map((feature) => (
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
          {habitSquaresTechStack.map((tech) => (
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
            items={habitSquaresCurrentRoadmapItems}
          />
          <RoadmapColumn title="Next" items={habitSquaresNextRoadmapItems} />
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

export default HabitSquaresPage;
