import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { GET_DATA } from "../Controllers/GET_DATA";

function CardRight(props) {
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

  if (!animeData) {
    return <div>Loading....</div>;
  }

  console.log(animeData);
  return (
    <div className="card-right">
      <div className="card-right-wrapper-image">
        <img
          className="card-bg"
          src={animeData.data.images.webp.large_image_url}
        />
      </div>
      <div className="card-right-wrapper-info">
        <img
          className="card-img"
          src={animeData.data.images.webp.large_image_url}
          alt="Anime Image"
        />
        <h2 className="card-right-title">{animeData.data.title}</h2>
        <p className="card-right-description">{animeData.data.background}</p>
      </div>
    </div>
  );
}

CardRight.propTypes = {
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
};

export default CardRight;
