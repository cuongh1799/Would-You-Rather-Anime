import doro from "../public/doro.png"
function About(){
    return(
        <div className="about-body">
            <h1>Would you rather Anime version</h1>
            <p>Would you rather Anime version was inspired by the tradtional "Would you prefer" web game.</p>
            <p>The project was built using Vite ReactJs, axios for fetching Jikan API, CSS for styling</p>
            <img src={doro}/>
        </div>
    )
}

export default About