import axios from "axios";

async function GET_DATA() {
  const JIKAN_ANIME = `https://api.jikan.moe/v4/random/anime`;
  try {
    const response = await axios.get(JIKAN_ANIME);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export { GET_DATA };
