import React from "react";

import InventoryLanding from "../InventoryLanding/InventoryLanding";
import Services from "../Features/Features";

const Home = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <InventoryLanding />
        <Services />
      </div>
    </section>
  );
};

export default Home;
