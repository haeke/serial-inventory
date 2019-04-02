import React from "react";

import InventoryLanding from "../InventoryLanding/InventoryLanding";
import Features from "../Features/Features";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <section>
      <InventoryLanding />
      <Features />
      <About />
      <Pricing />
      <Contact />
    </section>
  );
};

export default Home;
