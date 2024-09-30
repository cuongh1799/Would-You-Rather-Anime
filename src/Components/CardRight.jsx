import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { GET_DATA } from "../Controllers/GET_DATA";

function CardRight(props) {
  return (
    <div className="card-right">
      <div className="card-right-wrapper-image">
        <img
          className="card-bg"
          src={props.img}
        />
      </div>
      <div className="card-right-wrapper-info">
        <img
          className="card-img"
          src={props.img}
          alt="Anime Image"
        />
        <h2 className="card-right-title">{props.title}</h2>
        <p className="card-right-description">{props.desc}</p>
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
