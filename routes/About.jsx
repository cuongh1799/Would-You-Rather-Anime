import doro from "../public/doro.png";
import banner from "../public/banner.jpg";
function About() {
  return (
    <div className="about-body">
      <img className="banner" src={banner} />
      <div className="about-info">
        <h1 className="about-title">Would You Rather Anime Version</h1>
        <p className="about-description">
          Would you rather Anime version was inspired by the tradtional "Would
          you prefer" web game.
        </p>
        <p className="about-description">
          The project was built using Vite ReactJs, axios for fetching Jikan
          API, CSS for styling.
        </p>
      </div>

      {/* <img src={doro}/> */}
    </div>
  );
}

export default About;
