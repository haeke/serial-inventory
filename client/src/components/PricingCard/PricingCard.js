import React from "react";
import PropTypes from "prop-types";

import "./PricingCard.css";

const PricingCard = ({ pricingHeader, price, children }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="pricingCardContainer">
        <div className="row">
          <div className="col-md-12">
            <h1 className="pricingCardHeader">{pricingHeader}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="priceHeader">{price}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  pricingHeader: PropTypes.string,
  price: PropTypes.string,
  children: PropTypes.node
};

export default PricingCard;
