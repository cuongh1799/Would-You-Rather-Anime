import axios from "axios";
// const dotenv = require('dotenv').config()
const TopAnimeURL = `https://api.jikan.moe/v4/top/anime?top_anime_filter="bypopularity"`

async function GET_TOP_ANIME(){
    try{
        const response = await axios.get(TopAnimeURL);
        if(!response){
            throw new Error("Something went wrong while fetching xdd")
        }
        else return response.data.data;
    }
    catch(error){
        console.log("Error fetching data:", error);
        return null;
    }
}

export{GET_TOP_ANIME};