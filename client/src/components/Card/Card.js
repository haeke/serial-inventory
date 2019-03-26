import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ logo, cardHeader, cardSubHeader }) => {
  return (
    <div className="col-md-4 col-sm-8 cardContainer">
      <div className="row">
        <div className="col-md-12">{logo}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="cardHeader">{cardHeader}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4 className="cardSubHeader">{cardSubHeader}</h4>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  logo: PropTypes.node,
  cardHeader: PropTypes.string,
  cardSubHeader: PropTypes.string
};

export default Card;
