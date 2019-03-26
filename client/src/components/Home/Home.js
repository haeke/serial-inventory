import React from "react";

import InventoryLanding from "../InventoryLanding/InventoryLanding";
import Services from "../Features/Features";

const Home = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <h2>Home Page</h2>
        <InventoryLanding />
        <Services />
      </div>
    </section>
  );
};

export default Home;
