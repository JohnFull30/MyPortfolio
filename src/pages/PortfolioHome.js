import PortfolioLogoLink from "../components/PortfolioLogoLink.js";

const featuredProjects = [
  {
    id: "habitsquares-card",
    name: "HabitSquares",
    description:
      "A SwiftUI habit tracker that connects Apple Reminders with GitHub-style visual progress tracking.",
    stack: ["SwiftUI", "EventKit", "WidgetKit", "Core Data"],
    image: "/habitsquares-app.png",
    imageAlt: "HabitSquares iPhone app preview",
    demoHref: "#/projects/habitsquares",
    githubHref: "https://github.com/JohnFull30",
    caseStudyHref: "#case-study",
  },
  {
    id: "holistic-herbs-card",
    name: "Holistic Herbs",
    description:
      "A polished e-commerce experience for a wellness brand, focused on product browsing and clean shopping flows.",
    stack: ["React", "Material UI", "Supabase", "E-commerce"],
    image: "/holistic-herbs.jpg",
    imageAlt: "Holistic Herbs storefront preview",
    demoHref: "https://johnfull30.github.io/holistic-herbs/",
    githubHref: "https://github.com/JohnFull30/holistic-herbs",
  },
  {
    id: "gotobago-card",
    name: "GoTobago Tours",
    description:
      "A destination-focused travel product concept that packages tours, local context, and booking intent into one experience.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/gotobago.jpg",
    imageAlt: "GoTobago Tours website preview",
    demoHref: "https://johnfull30.github.io/gt/",
    githubHref: "https://github.com/JohnFull30/gt",
  },
  {
    id: "gender-reveal-card",
    name: "Gender Reveal Countdown",
    description:
      "A focused countdown app/demo with a polished moment-based interface and clear event-driven interaction.",
    stack: ["JavaScript", "HTML", "CSS", "UI Design"],
    image: "/countdown.jpg",
    imageAlt: "Gender Reveal Countdown app preview",
    demoHref: "https://johnfull30.github.io/countdown/",
    githubHref: "https://github.com/JohnFull30/countdown",
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "Material UI",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile",
    items: ["SwiftUI", "iOS", "WidgetKit", "EventKit", "Core Data", "CloudKit"],
  },
  {
    title: "Backend / Tools",
    items: ["Supabase", "GitHub Pages", "Git", "VS Code", "Xcode"],
  },
  {
    title: "Design",
    items: ["UI Layout", "Product Thinking", "Photoshop", "Branding", "Landing Pages"],
  },
];

function openProjectLink(href) {
  if (href.startsWith("http")) {
    window.open(href, "_blank", "noreferrer");
    return;
  }

  window.location.href = href;
}

function PortfolioHome() {
  const PUBLIC = process.env.PUBLIC_URL;

  return (
    <div className="portfolio-page">
      <nav className="nav" id="navbar" aria-label="Portfolio navigation">
        <PortfolioLogoLink
          href="#welcome-section"
          className="nav-logo-link"
          logoMode="auto"
        />
        <ul className="nav-list">
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#skills">Stack</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="welcome-section" className="welcome-section">
          <div className="hero-copy">
            <h1>John Fuller</h1>
            <p className="hero-subtitle">Frontend & Mobile Developer</p>
          </div>

          <div className="hero-visual" aria-label="Portfolio project previews">
            <div className="hero-device">
              <img
                src={`${PUBLIC}/habitsquares-app.png`}
                alt="HabitSquares mobile app screenshot"
              />
            </div>
            <div className="hero-project-chip">
              <span>Currently Building</span>
              <strong>HabitSquares</strong>
            </div>
          </div>
        </section>

        <section className="currently-building" aria-labelledby="building-title">
          <div>
            <p className="section-kicker">Currently building</p>
            <h2 id="building-title">HabitSquares</h2>
          </div>
          <p>
            A SwiftUI habit tracker that connects Apple Reminders with
            GitHub-style visual progress tracking.
          </p>
          <a
            href="#/projects/habitsquares"
            className="portfolio-button portfolio-button--accent portfolio-button--fit"
          >
            View the case study
          </a>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-heading">
            <p className="section-kicker">Featured Projects</p>
            <h2>Proof of design, product thinking, and shipped interfaces.</h2>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <article
                className="project-card"
                id={project.id}
                key={project.name}
                role="link"
                tabIndex="0"
                aria-label={`Open ${project.name} live demo`}
                onClick={(event) => {
                  if (event.target.closest("a")) {
                    return;
                  }

                  openProjectLink(project.demoHref);
                }}
                onKeyDown={(event) => {
                  if (event.target.closest("a")) {
                    return;
                  }

                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProjectLink(project.demoHref);
                  }
                }}
              >
                <div className="project-media">
                  <img
                    src={`${PUBLIC}${project.image}`}
                    alt={project.imageAlt}
                    className={
                      project.name === "HabitSquares" ? "project-image-contained" : ""
                    }
                  />
                </div>

                <div className="project-content">
                  <div className="project-card-copy">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="tech-list" aria-label={`${project.name} tech stack`}>
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-links">
                    <a
                      href={project.demoHref}
                      className="portfolio-button portfolio-button--accent portfolio-button--small"
                      target={project.demoHref.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubHref}
                      className="portfolio-button portfolio-button--accent portfolio-button--small"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    {project.caseStudyHref && (
                      <a
                        href={project.caseStudyHref}
                        className="portfolio-button portfolio-button--accent portfolio-button--small"
                        rel="noreferrer"
                      >
                        Case Study
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-study" className="case-study-section">
          <div className="section-heading">
            <p className="section-kicker">Case Study Format</p>
            <h2>HabitSquares shows how I move from idea to product.</h2>
          </div>

          <div className="case-study-grid">
            <div>
              <h3>Problem</h3>
              <p>
                Habit tracking often lives apart from the reminder system people
                already use, creating duplicate work instead of useful momentum.
              </p>
            </div>
            <div>
              <h3>Goal</h3>
              <p>
                Make habit completion visual, calm, and connected to Apple
                Reminders with a progress model that is easy to understand.
              </p>
            </div>
            <div>
              <h3>My Role</h3>
              <p>
                Product thinking, interface design, SwiftUI implementation,
                reminder integration, widget planning, and launch preparation.
              </p>
            </div>
            <div>
              <h3>Key Features</h3>
              <p>
                Heatmap progress, multiple habits, required reminders, local
                storage, widget-ready snapshots, and privacy-first defaults.
              </p>
            </div>
            <div>
              <h3>What I Learned</h3>
              <p>
                Apple framework integration is strongest when the product model
                stays simple, permission-aware, and clear to the user.
              </p>
            </div>
            <div>
              <h3>Next Improvements</h3>
              <p>
                TestFlight feedback, App Store polish, iCloud sync, onboarding
                refinement, and more widget layouts.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-heading">
            <p className="section-kicker">Skills / Stack</p>
            <h2>Tools I use to design, build, and ship.</h2>
          </div>

          <div className="skills-grid">
            {stackGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-kicker">Contact</p>
          <h2>Interested in working together?</h2>
          <p>
            I am open to frontend, product, mobile, and creative technology
            opportunities.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:johnathanfuller0@gmail.com"
              className="portfolio-button portfolio-button--accent"
            >
              Email Me
            </a>
            <a
              href="https://github.com/JohnFull30"
              className="portfolio-button portfolio-button--accent"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-fuller-03044322a/"
              className="portfolio-button portfolio-button--accent"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a
              href={`${PUBLIC}/John-Fuller-Resume.pdf`}
              className="portfolio-button portfolio-button--accent"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioHome;
