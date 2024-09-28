import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { GET_DATA } from "../Controllers/GET_DATA";

function CardLeft(props) {
  const [animeData, setAnimeData] = useState(null);
  const fetchData = async () => {
    const data = await GET_DATA();
    if (data) {
      setAnimeData(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if(!animeData){
    return <div>Loading....</div>
  }

  console.log(animeData);
  return (
    <div className="card-left">
      <img
        className="card-img"
        src={animeData.data.images.webp.large_image_url} // Corrected property access
        alt="Anime Image"
      />
      <h2 className="card-left-title">{animeData.data.title}</h2>
      <p className="card-left-description">{animeData.data.background}</p>
    </div>
  );
}

CardLeft.propTypes = {
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
};

export default CardLeft;
