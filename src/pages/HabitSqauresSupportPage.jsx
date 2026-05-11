import ProductNav from "../components/ProductNav";
import SupportItem from "../components/SupportItem";
import { habitsquaresEmail } from "../constants/habitsquares";

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

export default HabitSquaresSupportPage;
