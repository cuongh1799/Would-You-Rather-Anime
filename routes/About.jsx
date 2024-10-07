import doro from "../public/doro.png";
import banner from "../public/banner.jpg";
import banner2 from "../public/banner2.jpg";
function About() {
  return (
    <>
      <div className="about-body">
        <div className="banner-wrapper">
          <img className="banner" src={banner} />
          <div className="about-info">
            <h1 className="about-title">Would You Rather Anime Version</h1>
            <p className="about-description">
              Would you rather Anime version was inspired by the tradtional
              "Would you prefer" web game.
            </p>
            <p className="about-description">
              The project was built using cuongh1799, you can check how this
              work on his Github!
            </p>
          </div>
        </div>
      </div>
      <div className="about-stacks">
        <div className="banner-wrapper">
          <img className="banner" src={banner2} />
          <div className="about-info">
            <h1 className="about-title">Tech Stacks</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
