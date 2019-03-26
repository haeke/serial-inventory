import React from "react";

import Card from "../Card/Card";

import "./Features.css";

// This component will serve as the features section of the Home Page component.

const Features = () => {
  return (
    <section className="featuresContainer">
      <div className="row">
        <div className="col-md-12" />
        <div className="col-md-8 col-md-offset-4 col-xs-12">
          <h1 className="featuresHeader">We Provide Awesome Services</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Card
            logo={<i className="fas fa-ad featuredIcon" />}
            cardHeader="Add Software"
            cardSubHeader="We use the most up to date technology to track your inventory."
          />
          <Card
            logo={<i className="fas fa-layer-group featuredIcon" />}
            cardHeader="Mobile Friendly"
            cardSubHeader="Our site has been tested to work on all screen sizes."
          />
          <Card
            logo={<i className="fas fa-ad featuredIcon" />}
            cardHeader="Fast Service"
            cardSubHeader="Our site provides 24/7 support to answer any questions or concerns."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
