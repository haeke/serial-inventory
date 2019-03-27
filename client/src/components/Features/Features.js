import React from "react";

import Card from "../Card/Card";
import Pricing from "../Pricing/Pricing";

import "./Features.css";

// This component will serve as the features section of the Home Page component.

const Features = () => {
  return (
    <section className="featuresContainer">
      <div className="col-md-8 col-md-offset-2 col-xs-12">
        <h1 className="featuresHeader">We Provide Awesome Services</h1>
      </div>
      <div className="container">
        <div className="row text-center">
          <Card
            cardHeader="Add Software"
            cardSubHeader="We use the most up to date technology to track your inventory."
          >
            <i className="fas fa-ad featuredIcon" />
          </Card>
          <Card
            cardHeader="Mobile Friendly"
            cardSubHeader="Our site has been tested to work on all screen sizes."
          >
            <i className="fas fa-layer-group featuredIcon" />
          </Card>
          <Card
            cardHeader="Fast Service"
            cardSubHeader="Our site provides 24/7 support to answer any questions or concerns."
          >
            <i className="fab fa-accusoft featuredIcon" />
          </Card>
        </div>
        <div className="row">
          <Pricing />
        </div>
      </div>
    </section>
  );
};

export default Features;
