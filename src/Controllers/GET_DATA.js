import axios from "axios";

async function GET_DATA() {
  // Random Ids and Fetch from Jikan API
  const id = Math.floor(Math.random() * 99999);
  // var JIKAN_ANIME = `https://api.jikan.moe/v4/anime/${id}`;
  const JIKAN_ANIME = `https://api.jikan.moe/v4/anime/54857`;
  
  try {
    const response = await axios.get(JIKAN_ANIME);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export { GET_DATA };
