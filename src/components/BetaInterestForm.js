import { useId, useState } from "react";

export function betaInterestHref(appName, recipient, email) {
  const subject = `${appName} beta testing interest`;
  const body = `I'd like to beta test ${appName}.\n\nInvitation email: ${email.trim()}\n\nPlease contact me about beta availability for ${appName}.`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function scrollToBetaInterest() {
  document.getElementById("beta-interest")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function BetaInterestForm({ appName, recipient }) {
  const id = useId();
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    window.location.href = betaInterestHref(appName, recipient, email);
    setStatus("Your email app should open with your request. Send the email there to register your interest. If it doesn’t open, email the address below.");
  }

  return (
    <section id="beta-interest" className="product-section beta-interest" aria-labelledby={`${id}-title`}>
      <div>
        <p className="eyebrow">Beta testing</p>
        <h2 id={`${id}-title`}>Help shape {appName}.</h2>
        <p>Interested in trying the beta? Enter the email you’d like to use for an invitation.</p>
      </div>
      <form className="beta-interest-form" onSubmit={handleSubmit}>
        <label htmlFor={`${id}-email`}>Email address (required)</label>
        <div className="beta-interest-fields">
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" inputMode="email" autoCapitalize="none" spellCheck={false} required placeholder="you@example.com" aria-describedby={`${id}-note`} />
          <button className="primary-button" type="submit">Request beta access</button>
        </div>
        <p id={`${id}-note`} className="beta-interest-note">Opens your email app. Send the prepared request to share your email with Pierre Fuller Labs for {appName} beta invitations and updates.</p>
        <p className="beta-interest-note">You can also email <a href={`mailto:${recipient}`}>{recipient}</a>.</p>
        <p className="beta-interest-status" role="status">{status}</p>
      </form>
    </section>
  );
}
