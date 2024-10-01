import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { GET_DATA } from "../Controllers/GET_DATA";

function CardLeft(props) {
  return (
    <div className="card-left">
      {/* <div className="card-left-wrapper-image">
        <img
          className="card-bg"
          src={props.img}
        />
      </div> */}
      <div className="card-left-wrapper-info">
        <img
          className="card-img"
          src={props.img}
          alt="Anime Image"
        />
        <h2 className="card-left-title">{props.title}</h2>
        <p className="card-left-description">{props.desc}</p>
      </div>
    </div>
  );
}

CardLeft.propTypes = {
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
};

export default CardLeft;
