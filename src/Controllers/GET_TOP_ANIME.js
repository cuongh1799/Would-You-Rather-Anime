import axios from "axios";

function randomPage() {
  const choose = Math.floor(Math.random() * 15 + 1);
  return choose;
}

async function GET_TOP_ANIME() {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?top_anime_filter="bypopularity"&page=${randomPage()}`
    );
    if (!response) {
      throw new Error("Something went wrong while fetching xdd");
    } else return response.data.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}

export { GET_TOP_ANIME };
