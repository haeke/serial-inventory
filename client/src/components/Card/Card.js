import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ children, cardHeader, cardSubHeader }) => {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="cardContainer">
        <div className="row">
          <div className="col-md-12">{children}</div>
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
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  cardHeader: PropTypes.string,
  cardSubHeader: PropTypes.string
};

export default Card;
