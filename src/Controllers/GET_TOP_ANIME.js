import axios from "axios";
// const dotenv = require('dotenv').config()
const TopAnimeURL0 = `https://api.jikan.moe/v4/top/anime?top_anime_filter="bypopularity"&page=1`;
const TopAnimeURL1 = `https://api.jikan.moe/v4/top/anime?top_anime_filter="bypopularity"&page=2`;
const TopAnimeURL2 = `https://api.jikan.moe/v4/top/anime?top_anime_filter="bypopularity"&page=3`;

function randomLink() {
  const choose = Math.floor(Math.random() * 2);
  switch (choose) {
    case 0:
        return TopAnimeURL0;
    case 1:
        return TopAnimeURL1;
    case 2:
        return TopAnimeURL2;
  }
}

async function GET_TOP_ANIME() {
  try {
    const response = await axios.get(randomLink());
    if (!response) {
      throw new Error("Something went wrong while fetching xdd");
    } else return response.data.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}


export { GET_TOP_ANIME};
