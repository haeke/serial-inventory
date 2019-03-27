import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contactHeader">Contact:</div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="phoneContainer">
              <h1 className="phoneHeader">Phone</h1>
              <hr />
              <h2 className="phoneNumber">+1-123-456-7890</h2>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="emailContainer">
              <h1 className="emailHeader">Email</h1>
              <hr />
              <h2 className="emailAddress">inventrack@gmail.com</h2>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="locationContainer">
              <h1 className="locationHeader">Location</h1>
              <hr />
              <h2 className="locationAddress">74 Gold Street 278B, Town Rd.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="copyInfo">
              <h1 className="copyrightHeader">
                &copy; InvenTrack 2019 - All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
