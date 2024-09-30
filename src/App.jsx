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
  const [AnimePopularityList, setAnimePopularityList] = useState(null);

  // Loading state to wait for async function to finish
  const [loading, setLoading] = useState(true); 

  const fetchData = async () => {
    // Start Loading
    setLoading(true); 

    const data = await GET_TOP_ANIME(); 
    if (data) {
      setAnimePopularityList(data);
      const randomIndex1 = Math.floor(Math.random() * data.length);
      const randomIndex2 = Math.floor(Math.random() * data.length);

      // Set Anime ID
      setAnimeLeftID(data[randomIndex1]);
      setAnimeRightID(data[randomIndex2])
    } else {
      console.log("Error fetching data");
    } 

    // End Loading
    setLoading(false); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) { // Step 3: Conditional rendering
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <>
      <Header />
      <div className="body">
        <span className="left-body">
          <CardLeft title={animeLeftID.title} img={animeLeftID.images.webp.large_image_url} />
        </span>
        <span className="right-body">
        <CardLeft title={animeRightID.title} img={animeRightID.images.webp.large_image_url} />
        </span>
      </div>
    </>
  );
}

export default App;
