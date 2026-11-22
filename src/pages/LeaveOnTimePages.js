import BetaInterestForm, { scrollToBetaInterest } from "../components/BetaInterestForm";
import ProductNav from "../components/ProductNav";
import SupportItem from "../components/SupportItem";
import StepCard from "../components/StepCard";

const supportEmail = "support@pierrefullerlabs.com";
const supportHref = `mailto:${supportEmail}?subject=Leave%20On%20Time%20Support`;

export const leaveOnTimeRoot = "#/projects/leaveontime";
const links = [
  { href: leaveOnTimeRoot, label: "Leave On Time" },
  { href: `${leaveOnTimeRoot}/privacy`, label: "Privacy" },
  { href: `${leaveOnTimeRoot}/support`, label: "Support" },
];

function FooterLinks() {
  return (
    <div className="legal-links">
      {links.map(({ href, label }) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </div>
  );
}

export function LeaveOnTimePage() {
  return (
    <main className="product-page leave-on-time-page">
      <ProductNav links={links} />
      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">iOS departure planner · In development</p>
          <img
            className="leave-on-time-icon"
            src={`${process.env.PUBLIC_URL}/leaveontime-icon.png`}
            alt=""
            width="88"
            height="88"
          />
          <h1>Leave On Time</h1>
          <p className="product-subtitle">
            Make room for the drive before your next appointment.
          </p>
          <p className="product-description">
            Leave On Time plans driving departures from selected Calendar
            appointments using a saved starting address, Apple Maps driving
            estimates and a travel buffer.
          </p>
          <div className="product-actions">
            <button type="button" className="primary-button" onClick={scrollToBetaInterest}>Request beta access</button>
            <a className="primary-button" href={`${leaveOnTimeRoot}/support`}>
              Support
            </a>
            <a className="secondary-button" href={`${leaveOnTimeRoot}/privacy`}>
              Privacy Policy
            </a>
          </div>
        </div>
        <figure className="leave-on-time-preview">
          <img
            src={`${process.env.PUBLIC_URL}/leaveontime-setup.png`}
            alt="Leave On Time setup screen asking for a starting address, with departure notification controls and Departure, Calendar, History and Settings tabs."
            width="1206"
            height="2622"
          />
          <figcaption>
            From the development app · Starting address setup
          </figcaption>
        </figure>
      </section>
      <BetaInterestForm appName="Leave On Time" recipient={supportEmail} />
      <section className="product-section split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Your day, with room to breathe.</h2>
          <p>
            Select upcoming timed Calendar appointments with locations, save
            where you’ll drive from and choose a travel buffer. Each trip starts
            from that saved address.
          </p>
        </div>
        <div className="steps-list">
          <StepCard
            number="01"
            title="Connect Calendar and select appointments"
          />
          <StepCard
            number="02"
            title="Save your starting address and travel buffer"
          />
          <StepCard
            number="03"
            title="Review the driving estimate and departure countdown"
          />
          <StepCard
            number="04"
            title="Confirm when you leave and review your history"
          />
        </div>
      </section>
      <section className="product-section">
        <div className="section-heading">
          <p className="eyebrow">Planned features</p>
          <h2>A clearer view of when to leave.</h2>
          <p>
            In development. Availability and behavior may change before release.
          </p>
        </div>
        <div className="feature-grid">
          {[
            "Departure countdowns",
            "Local reminders",
            "Lock Screen and Dynamic Island Live Activities",
            "View your countdown and confirm leaving on a compatible paired Apple Watch",
            "Departure history with Undo Departure",
            "Saved starting address",
            "Apple Maps driving estimates",
            "Adjustable travel buffer",
          ].map((feature) => (
            <div className="feature-card" key={feature}>
              <span className="feature-dot" aria-hidden="true" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="product-section privacy-band">
        <div>
          <p className="eyebrow">Plan ahead</p>
          <h2>Estimates to help you prepare.</h2>
        </div>
        <div className="privacy-points">
          <p>
            Driving estimates and countdowns can become outdated. Open the app
            to review your appointment, starting address and departure plan
            before traveling.
          </p>
          <p>
            Notifications are the primary reminder. Reminder delivery and Live
            Activity updates depend on permissions, device state and system
            scheduling. Continuous background updates and exact-second
            presentation changes are not guaranteed.
          </p>
          <p>
            On a compatible paired Apple Watch, view the departure Live Activity
            in Smart Stack and interact with it: tap I’m Leaving, then Confirm
            Leaving or Cancel. Availability and updates depend on system support
            and connectivity.
          </p>
        </div>
      </section>
      <section className="product-cta">
        <p className="eyebrow">In development</p>
        <h2>Follow the plan, with time to spare.</h2>
        <p>
          Built for iPhone with iOS 18 or later. Release details will be added
          when available.
        </p>
        <div className="product-actions centered">
          <a className="primary-button" href={supportHref}>
            Contact support
          </a>
        </div>
        <FooterLinks />
      </section>
    </main>
  );
}

const supportItems = [
  [
    "Calendar access and selection",
    "Connect Apple Calendar with full access, then choose the calendars to monitor in Settings and review appointment toggles in the Calendar tab. Missing appointments must be timed events within the next seven days; all-day events are excluded. Confirm the event appears in Apple Calendar, its calendar is selected and access is still allowed, then pull to refresh.",
  ],
  [
    "Appointment locations",
    "Driving estimates need a usable destination. If an appointment has no location or its location cannot be resolved, add or correct the address in Calendar, then reopen Leave On Time and review the appointment.",
  ],
  [
    "Starting address",
    "Review the saved starting address before planning a departure. Use the address you intend to drive from; a different starting point changes the driving estimate.",
  ],
  [
    "Travel buffer",
    "In Settings → Starting point, adjust Preparation to set the travel buffer. Review both the driving estimate and buffer when checking the planned departure.",
  ],
  [
    "Notification permissions",
    "Allow notifications for Leave On Time in iOS Settings. Check Focus and notification settings if a reminder is missing. Local reminders depend on system delivery and are not guaranteed.",
  ],
  [
    "Live Activities and outdated countdowns",
    "Allow Live Activities for Leave On Time in iOS Settings. Dynamic Island needs a supported iPhone. Scheduled future starts require iOS 26 or later; earlier versions need foreground opportunities to start activities. If a countdown looks outdated after an event edit or traffic change, open the app, pull to refresh and review the plan. Calendar access loss can leave previously scheduled reminders in place; check any warning before relying on them. iOS controls update timing; background refresh and exact-second changes are not guaranteed.",
  ],
  [
    "Apple Watch presentation and connectivity",
    "Look for the system-mirrored small Live Activity in Smart Stack on a compatible Apple Watch paired with your iPhone. There is no separate Watch app to install. If the presentation is missing or stale, check the pairing and connection, review the relevant Watch settings and open Leave On Time on the iPhone. Presentation depends on system support and connectivity.",
  ],
  [
    "Record or undo a departure",
    "Tap I’m Leaving on iPhone to record your departure. On the Lock Screen or Watch, choose I’m Leaving, then Confirm Leaving or Cancel. Use Undo Departure in History if you recorded one by mistake.",
  ],
  [
    "Add a meeting from text, photo or scan",
    "Use Add Meeting to review suggested details before saving. Recognition runs on the device. Saving includes the full source text in Calendar event notes, which may sync through your calendar provider. Correct any date or address suggestions before saving.",
  ],
];

export function LeaveOnTimeSupportPage() {
  return (
    <main className="product-page legal-page leave-on-time-page">
      <ProductNav links={links} />
      <section className="legal-card">
        <p className="eyebrow">Leave On Time · In development</p>
        <h1>Leave On Time Support</h1>
        <p className="legal-date">
          Need help? Contact <a href={supportHref}>{supportEmail}</a>. Include
          your device, iOS version, app build and steps to reproduce the issue.
          Redact private event names, addresses and images.
        </p>
        <div className="support-list">
          {supportItems.map(([title, description]) => (
            <SupportItem key={title} title={title} description={description} />
          ))}
        </div>
        <FooterLinks />
      </section>
    </main>
  );
}

const privacySections = [
  [
    "About this app",
    "Leave On Time is published by John Fuller under the Pierre Fuller Labs brand. It helps you plan driving departures for Calendar appointments. The app has no account system, advertising or third-party analytics SDK. We do not operate an app server that receives your calendar details, photos, messages or departure history.",
  ],
  [
    "Calendar and local storage",
    "With your permission, Leave On Time reads selected calendars to find upcoming timed appointments and their locations. It stores settings, your starting address, departure plans and completed-departure history locally. Records can include calendar and occurrence identifiers, event titles, dates, locations, coordinates, route snapshots and actual departure times. Departure history has no automatic expiry; you can undo a recorded departure.",
  ],
  [
    "Apple Maps and address requests",
    "Address searches, driving estimates and geocoding use Apple services. Search text, addresses or coordinates needed for those requests are sent to Apple. Open in Maps hands a destination to Apple Maps. Leave On Time does not monitor your live GPS location. Your calendar provider may independently sync calendar information.",
  ],
  [
    "Photos, scans and meeting text",
    "You may paste meeting text, select a photo or scan a page. Text recognition runs on the device; the app does not upload images or recognized text to our servers. Imported images and recognition text are held in the import interface’s memory rather than explicitly saved as image files. The photo picker accesses selected items, and Apple’s picker may retrieve a selected asset from your photo library service.",
  ],
  [
    "Saving writes source text to Calendar",
    "When you review a meeting and choose Save, the app creates a Calendar event and writes the full source text into the event’s notes. That text can contain names, contact details or other message content. The selected calendar provider may sync the event and notes, and people with access to that event may see them. Review the source text before saving. Manage saved events and notes separately in Calendar.",
  ],
  [
    "Notifications, Live Activities and Apple Watch",
    "Appointment titles, destination labels and times may appear in local notifications, Lock Screen and Dynamic Island Live Activities, and system presentation on a compatible paired Apple Watch. Others may see those details depending on your device settings. The app has no developer push-notification server. Presentation and mirroring are managed by the operating system.",
  ],
  [
    "Local diagnostics",
    "The app keeps a bounded scheduling observation log, the last scheduling error and a local SchedulingDiagnostics.txt file. Diagnostics can contain appointment titles, occurrence identifiers and times. They are not automatically uploaded to us. If you deliberately share diagnostics with support, they become part of your support correspondence.",
  ],
  [
    "Permissions, deletion and backups",
    "Manage Calendar, Camera, notification and Live Activity permissions in device settings. Removing access alone does not erase local history, Calendar events or previously scheduled reminders. Deleting the app removes its local container; offloading it retains app data. Data may be included in device backups, which may retain earlier copies according to your backup settings. Calendar events and their notes remain independent of the app and must be edited or deleted in Calendar. There is no app server account to delete.",
  ],
  [
    "Support and TestFlight feedback",
    "If you contact support, John Fuller receives the email address, message, attachments and diagnostics you choose to provide. Only John Fuller accesses support and beta feedback, using it to respond, troubleshoot and improve the app. Support email is handled through Cloudflare forwarding and Gmail and is deleted within 12 months after the issue is resolved. You can request deletion of support correspondence using the contact below. If you participate in TestFlight, Apple automatically collects and shares crash logs and beta usage information with the publisher, including device and build details. Apple also shares feedback and screenshots you submit. Your name and email address may be included depending on the invitation and feedback you provide. Apple controls retention of TestFlight records; deletion is subject to the controls Apple makes available. Avoid sharing private Calendar content or photos unless you intend to include them.",
  ],
];

export function LeaveOnTimePrivacyPage() {
  return (
    <main className="product-page legal-page leave-on-time-page">
      <ProductNav links={links} />
      <section className="legal-card">
        <p className="eyebrow">Leave On Time</p>
        <h1>Leave On Time Privacy Policy</h1>
        <p className="legal-date">
          Effective date: November 14, 2026
        </p>
        <div className="legal-content">
          {privacySections.map(([title, content]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{content}</p>
            </section>
          ))}
          <p>
            Apple services and calendar providers have their own privacy
            practices. Read{" "}
            <a href="https://www.apple.com/legal/privacy/data/en/apple-maps/">
              Apple Maps privacy
            </a>{" "}
            and{" "}
            <a href="https://www.apple.com/legal/privacy/data/en/test-flight/">
              TestFlight privacy
            </a>
            .
          </p>
          <p>
            For privacy questions or support-data deletion requests, contact{" "}
            <a
              href={`mailto:${supportEmail}?subject=Leave%20On%20Time%20Privacy`}
            >
              {supportEmail}
            </a>
            . This policy will be updated if app behavior or these practices
            change.
          </p>
        </div>
        <FooterLinks />
      </section>
    </main>
  );
}
