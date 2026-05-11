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

export default PortfolioHome;