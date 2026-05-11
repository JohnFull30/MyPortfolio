import ProductNav from "../components/ProductNav";
import { habitsquaresEmail } from "../constants/habitsquares";

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

export default HabitSquaresPrivacyPage;