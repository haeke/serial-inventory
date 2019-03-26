import React from "react";

import InventoryLanding from "../InventoryLanding/InventoryLanding";

const Home = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <h2>Home Page</h2>
        <InventoryLanding />
      </div>
    </section>
  );
};

export default Home;
