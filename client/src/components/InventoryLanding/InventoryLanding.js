import React from "react";

import "./InventoryLanding.css";

// The landing component just lists the title of the product and a small sentence naming what it is going to be used for.

const InventoryLanding = () => {
  return (
    <section className="inventoryContainer">
      <div className="col-md-12">
        {/* <div className="row"> */}
        <div className="col-md-6 col-md-offset-3 col-xs-12">
          <div className="landingHeaderWrapper">
            <h1 className="landingHeader">InvenTrack</h1>
            <p className="landingParagraph">
              A new way to keep track of all your software products.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default InventoryLanding;
