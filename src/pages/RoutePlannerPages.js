import ProductNav from "../components/ProductNav";
import SupportItem from "../components/SupportItem";

const routePlannerRoot = "#/projects/routeplanner";
const supportEmail = "support@pierrefullerlabs.com";
const supportHref = `mailto:${supportEmail}?subject=Route%20Planner%20Support`;
const links = [
  { href: routePlannerRoot, label: "Route Planner" },
  { href: `${routePlannerRoot}/privacy`, label: "Privacy" },
  { href: `${routePlannerRoot}/support`, label: "Support" },
];

function FooterLinks() {
  return (
    <div className="legal-links">
      {links.map(({ href, label }) => (
        <a key={href} href={href}>{label}</a>
      ))}
    </div>
  );
}

const supportItems = [
  [
    "Importing job-card screenshots",
    "Choose Add, then select screenshots from your photo library. The app can create a draft for each selected image. Review every title, address, date and other detail against the original card before starting a route. You can also add or edit a job manually.",
  ],
  [
    "Screenshot text recognition",
    "On iOS, Route Planner reads selected screenshots with Apple Vision on your device. Check the draft carefully because text recognition can miss or misread information. If recognition is unavailable, add the job details manually. Camera and microphone access are not used.",
  ],
  [
    "Map stops or address lookup",
    "Check that each job has a complete street address, including city, state and ZIP code. The map places stops using the device’s platform map and geocoding services. If a stop is missing, correct the address and use Retry addresses. You can review or verify a stop’s location in the map view.",
  ],
  [
    "Using your current location",
    "Route Planner asks for foreground location access when you choose My location or use your current position to generate or start a route. Allow location while using the app, or enter a starting address instead. Location is not requested for background tracking.",
  ],
  [
    "Opening a destination in Maps",
    "Choose your driving app in the route settings where available, then use Open in Maps on a job. If the selected app is unavailable, install or open Apple Maps or Google Maps and try again. Check the destination and route in the navigation app before driving.",
  ],
  [
    "Saved plans and preferences",
    "Route plans, job details, display preferences and your map-app choice are saved locally on the device. If a save indicator shows an error, keep the app open and use its retry option before closing it. Device backup settings may affect whether local app data is backed up.",
  ],
  [
    "Contact support",
    "Email us at support@pierrefullerlabs.com. Include your device model, operating-system version, app version and steps to reproduce the issue. Please remove or obscure customer names, job addresses, reference numbers and screenshots unless they are needed and you intend to share them.",
  ],
];

const privacySections = [
  [
    "Who publishes Route Planner",
    "Route Planner is published by John Fuller under the Pierre Fuller Labs brand. This policy describes the Route Planner mobile app and its related features. It is effective November 21, 2026.",
  ],
  [
    "Information saved on your device",
    "The app stores the route plans you create, including job titles, addresses, notes, appointment times, reference details, stop order, completion status, route and location confirmations, and any screenshot attached to a job. It also saves display preferences and your chosen navigation app. These records are stored in app-managed local storage; Route Planner has no account system or app-operated server that receives your plans.",
  ],
  [
    "Photos and text recognition",
    "You choose which job-card images to import through the system photo picker. On iOS, text recognition uses Apple Vision on the device. The app may copy a selected image into its app-managed documents so it remains attached to its job. The app does not send these images or recognized text to a Route Planner server. Recognition is not available in every app version or platform; you can enter details manually. The app does not request camera or microphone access.",
  ],
  [
    "Location access",
    "Route Planner requests location access only while you are using the app, when you ask to show your position or use your current location as a route start. It uses the returned location to show your position on the map or save a starting coordinate with the route. The app does not request always-on or background location access and does not operate a service that collects your GPS history.",
  ],
  [
    "Maps, geocoding and navigation",
    "The in-app map and address lookup rely on the platform’s mapping and geocoding services. Addresses or coordinates and map areas needed to display or resolve stops may be sent to the applicable map provider. When you choose Open in Maps, Route Planner opens Apple Maps or Google Maps with the selected destination and, when applicable, the start address. Those providers receive information needed to provide their map or navigation service and handle it under their own privacy policies. Review addresses and destinations before starting navigation.",
  ],
  [
    "No account, ads or app analytics",
    "The current app does not require an account and the app source does not include advertising or a third-party analytics SDK. We do not receive route plans, job details, imported screenshots or GPS location through an app backend. Apple, Google, the app marketplace, and your device operating system may process information under their own services and policies.",
  ],
  [
    "Retention and deletion",
    "Route data and settings remain in the app’s local storage until you remove them or clear the app’s data. Removing a job removes its record from your plan; an imported screenshot file may remain in the app’s documents after its job is removed. To clear all app-managed local files, use your device’s app-storage controls or uninstall the app. Device or cloud backups may retain copies according to your backup settings. There is no Route Planner account or server copy for us to delete.",
  ],
  [
    "Support messages",
    "If you contact support, we receive the email address, message and any attachments you choose to send. We use them to respond and troubleshoot. Please avoid including private customer or job information unless necessary. Contact us at the address below if you have a privacy question about support correspondence.",
  ],
  [
    "Policy updates",
    "We may update this policy when the app or its data practices change. The effective date at the top will be revised when that happens.",
  ],
];

export function RoutePlannerSupportPage() {
  return (
    <main className="product-page legal-page route-planner-page">
      <ProductNav logoLinkProps={{ href: "#/" }} links={links} />
      <section className="legal-card">
        <p className="eyebrow">Route Planner</p>
        <h1>Route Planner Support</h1>
        <p className="legal-date">
          Need help? Contact <a href={supportHref}>{supportEmail}</a>. Please
          redact private job and customer information before sending screenshots.
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

export function RoutePlannerPrivacyPage() {
  return (
    <main className="product-page legal-page route-planner-page">
      <ProductNav logoLinkProps={{ href: "#/" }} links={links} />
      <section className="legal-card">
        <p className="eyebrow">Route Planner</p>
        <h1>Route Planner Privacy Policy</h1>
        <p className="legal-date">Effective date: November 21, 2026</p>
        <div className="legal-content">
          {privacySections.map(([title, content]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{content}</p>
            </section>
          ))}
          <p>
            Read the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>
            {" "}and <a href="https://policies.google.com/privacy">Google Privacy Policy</a>
            {" "}for information about their services.
          </p>
          <p>
            For privacy questions, contact{" "}
            <a href="mailto:support@pierrefullerlabs.com?subject=Route%20Planner%20Privacy">
              support@pierrefullerlabs.com
            </a>.
          </p>
        </div>
        <FooterLinks />
      </section>
    </main>
  );
}
