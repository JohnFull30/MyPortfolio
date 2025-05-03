import './App.css';

function App() {
  return (
    <div className="App">
      {/* NAV */}
      <nav className="nav" id="navbar">
        <ul className="nav-list">
          <li><a href="#welcome-section">About</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="welcome-section" className="welcome-section">
        <h1>John Fuller</h1>
        <p>Web & Graphic Designer</p>
        <img src="/logo-f.png" alt="Logo F" className="hero-logo" />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-container">
          <img
            src="/logo-f.png"
            alt="Watermark F"
            className="projects-watermark"
          />

          <div className="projects-grid">
            <a href="https://johnfull30.github.io/gt/" target="_blank" rel="noreferrer">
              <img src="/gotobago.jpg" alt="GoTobago Tours" />
              <p><em>GoTobago Tours</em></p>
            </a>
            <a href="https://johnfull30.github.io/f2t/" target="_blank" rel="noreferrer">
              <img src="/farm2table.jpg" alt="Farm2Table" />
              <p><em>Farm2Table</em></p>
            </a>
            <a href="https://johnfull30.github.io/countdown/" target="_blank" rel="noreferrer">
              <img src="/countdown.jpg" alt="Gender Reveal Countdown" />
              <p><em>Gender Reveal Countdown</em></p>
            </a>
            <a href="https://johnfull30.github.io/holistic-herbs/" target="_blank" rel="noreferrer">
              <img src="/holistic-herbs.jpg" alt="Holistic Herbs" />
              <p><em>Holistic Herbs</em></p>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <h2>Let's work together...</h2>
        <p><em>How do you like your code?</em></p>
        <div className="contact-buttons">
          <a href="https://www.linkedin.com/in/john-fuller-03044322a/">Linkedin</a>
          <a href="https://github.com/JohnFull30">GitHub</a>
          <a href="mailto:johnathanfuller0@gmail.com">johnathanfuller0@gmail.com</a>
          <a href="tel:9199876632">(919)-987-6632</a>
        </div>
      </section>
    </div>
  );
}

export default App;
