import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

function CardRight(props) {
  return (
    <div className="card-right">
      {/* <div className="card-right-wrapper-image">
        <img
          className="card-bg"
          src={props.img}
        />
      </div> */}
      <div className="card-right-wrapper-info">
        <h2 className="card-members">Total members:{" "}{props.members}</h2>
        <img className="card-img" src={props.img} alt="Anime Image" />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.desc}</p>
      </div>
    </div>
  );
}

CardRight.propTypes = {
  members: propTypes.string,
  title: propTypes.string,
  img: propTypes.string,
  desc: propTypes.string,
};

export default CardRight;
