import { useEffect, useState } from "react";
import CardLeft from "../src/Components/CardLeft";
import CardRight from "../src/Components/CardRight";
import Header from "../src/Components/Header";
import { GET_TOP_ANIME } from "../src/Controllers/GET_TOP_ANIME";
import Loading from "../src/Components/Loading";
import { Outlet } from "react-router-dom";

function App() {
  // Anime ID
  const [animeLeftID, setAnimeLeftID] = useState(null);
  const [animeRightID, setAnimeRightID] = useState(null);

  // Full Anime List based on popularity
  const [AnimePopularityList1, setAnimePopularityList1] = useState(null);
  const [AnimePopularityList2, setAnimePopularityList2] = useState(null);

  // Hover state
  const [hoveredCard, setHoveredCard] = useState(null);

  // Revealed state
  const [revealedCard, setRevealedCard] = useState(null);

  // Loading state to wait for async function to finish
  const [loading, setLoading] = useState(true);

  // Number formatter
  // https://www.basedash.com/blog/how-to-format-a-number-with-commas-in-javascript
  const formatter = new Intl.NumberFormat("en-US");

  const fetchData = async () => {
    // Start Loading
    setLoading(true);

    const data1 = await GET_TOP_ANIME();
    const data2 = await GET_TOP_ANIME();

    if (data1 && data2) {
      setAnimePopularityList1(data1);
      setAnimePopularityList2(data2);
      const randomIndex1 = Math.floor(Math.random() * data1.length);
      const randomIndex2 = Math.floor(Math.random() * data2.length);
      setAnimeLeftID(data1[randomIndex1]);
      setAnimeRightID(data2[randomIndex2]);
    } else {
      console.log("Error fetching data");
    }

    // End Loading
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Reset the data after choosing the card
  useEffect(() => {
    if (revealedCard) {
      const timer = setTimeout(() => {
        setRevealedCard(null);
        fetchData(); // Fetch new data after resetting
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [revealedCard]);

  // Loading screen incase the fetching is not finish
  if (loading) {
    return (
      <div className="body">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div className="body">
        {/* Basically, when the cursor enters the body area, it sets hoveredCard 
        to either left or right 

        Then the ${hoveredCard === "left" ? "hovered" : ""} will check if its right or left
        hence apply the .hovered class to it */}

        <span
          className={`left-body ${hoveredCard === "left" ? "hovered" : ""} ${
            revealedCard === "Yes" ? "revealed" : ""
          }`}
          onMouseEnter={() => setHoveredCard("left")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setRevealedCard("Yes")}
        >
          <CardLeft
            members={formatter.format(animeLeftID.members)}
            title={animeLeftID.title}
            img={animeLeftID.images.webp.large_image_url}
          />
        </span>
        <span
          className={`right-body ${hoveredCard === "right" ? "hovered" : ""} ${
            revealedCard === "Yes" ? "revealed" : ""
          }`}
          onMouseEnter={() => setHoveredCard("right")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setRevealedCard("Yes")}
        >
          <CardRight
            members={formatter.format(animeRightID.members)}
            title={animeRightID.title}
            img={animeRightID.images.webp.large_image_url}
          />
        </span>
        {/* <Outlet/> */}
      </div>
    </>
  );
}

export default App;
