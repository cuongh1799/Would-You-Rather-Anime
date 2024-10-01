import { useEffect, useState } from "react";
import CardLeft from "./Components/CardLeft";
import CardRight from "./Components/CardRight";
import Header from "./Components/Header";
import { GET_TOP_ANIME } from "./Controllers/GET_TOP_ANIME";

function App() {
  // Anime ID
  const [animeLeftID, setAnimeLeftID] = useState(null);
  const [animeRightID, setAnimeRightID] = useState(null);

  // Full Anime List based on popularity
  const [AnimePopularityList1, setAnimePopularityList1] = useState(null);
  const [AnimePopularityList2, setAnimePopularityList2] = useState(null);

  // Hover state
  const [hoveredCard, setHoveredCard] = useState(null);

  // Loading state to wait for async function to finish
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // Start Loading
    setLoading(true);

    const data1 = await GET_TOP_ANIME();
    const data2 = await GET_TOP_ANIME();
    if (data1) {
      setAnimePopularityList1(data1);
      setAnimePopularityList2(data2);
      const randomIndex1 = Math.floor(Math.random() * data1.length);
      const randomIndex2 = Math.floor(Math.random() * data2.length);

      // Set Anime ID
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="body">
        {/* Basically, when the cursor enters the body area, it sets hoveredCard 
        to either left or right 

        Then the ${hoveredCard === "left" ? "hovered" : ""} will check if its right or left
        hence apply the .hovered class to it */}
        
        <span
          className={`left-body ${hoveredCard === "left" ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredCard("left")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardLeft
            title={animeLeftID.title}
            img={animeLeftID.images.webp.large_image_url}
          />
        </span>
        <span
          className={`right-body ${hoveredCard === "right" ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredCard("right")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardRight
            title={animeRightID.title}
            img={animeRightID.images.webp.large_image_url}
          />
        </span>
      </div>
    </>
  );
}

export default App;
