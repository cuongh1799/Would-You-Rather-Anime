import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

function CardLeft(props) {
  return (
    <div
      className="card-left">
      {/* <div className="card-left-wrapper-image">
        <img
          className="card-bg"
          src={props.img}
        />
      </div> */}
      <div className="card-left-wrapper-info">
        <h2 id="nbr" className="card-members">
          {props.members}
        </h2>
        <img className="card-img" src={props.img} alt="Anime Image" />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.desc}</p>
      </div>
    </div>
  );
}

CardLeft.propTypes = {
  members: propTypes.number,
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
};

export default CardLeft;
