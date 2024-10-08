function About() {
  return (
    <>
      <div className="about-body">
        <div className="banner-wrapper1">
          <div className="about-info">
            <h1 className="about-title">Would You Rather Anime Version</h1>
            <p className="about-description">
              Would you rather Anime version was inspired by the tradtional
              "Would you prefer" web game.
            </p>
            <p className="about-description">
              The project was built by cuongh1799, you can check how this work
              on his Github!
            </p>
            <span className="container">
              <a
                href="https://github.com/cuongh1799/Would-You-Rather-Anime"
                className="about-link"
              >
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
                <p className="link-description">Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/huynh-cuong-0076832a3/"
                className="about-link"
              >
                <img
                  className="icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                />

                <p className="link-description">LinkedIn</p>
              </a>
            </span>
          </div>
        </div>
        <div className="banner-wrapper2">
          <div className="about-info">
            <h1 className="about-title">Tech Stacks</h1>
          </div>
          <div className="body2">
            <div className="left-body2">
              <h1>FrontEnd</h1>
              <div className="stack-container">
                <img
                  className="icon2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <img
                  className="icon2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />

                <img
                  className="icon2"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                />
              </div>
            </div>
            <div className="right-body2">
              <h1>BackEnd</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
