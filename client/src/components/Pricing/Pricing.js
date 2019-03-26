import React from "react";

import PricingCard from "../PricingCard/PricingCard";

import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricingContainer">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h1 className="pricingHeader">Pricing Table</h1>
        </div>
        <div className="container">
          <div className="row text-center">
            <PricingCard pricingHeader="Basic" price="$20 per month">
              <ul className="pricingList">
                <li>
                  <p className="pricingItem">24/7 Tech Support</p>
                </li>
                <li>
                  <p className="pricingItem">Advanced Options</p>
                </li>
                <li>
                  <p className="pricingItem">1 GB Storage</p>
                </li>
                <li>
                  <p className="pricingItem">6 GB Bandwidth</p>
                </li>
              </ul>
            </PricingCard>
            <PricingCard pricingHeader="Standard" price="$30 per month">
              <ul className="pricingList">
                <li>
                  <p className="pricingItem">24/7 Tech Support</p>
                </li>
                <li>
                  <p className="pricingItem">Advanced Options</p>
                </li>
                <li>
                  <p className="pricingItem">3 GB Storage</p>
                </li>
                <li>
                  <p className="pricingItem">12 GB Bandwidth</p>
                </li>
              </ul>
            </PricingCard>
            <PricingCard pricingHeader="Premium" price="$50 per month">
              <ul className="pricingList">
                <li>
                  <p className="pricingItem">24/7 Tech Support</p>
                </li>
                <li>
                  <p className="pricingItem">Advanced Options</p>
                </li>
                <li>
                  <p className="pricingItem">10 GB Storage</p>
                </li>
                <li>
                  <p className="pricingItem">Unlimited Bandwidth</p>
                </li>
              </ul>
            </PricingCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
