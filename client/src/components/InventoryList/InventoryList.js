import React from "react";
import { connect } from "react-redux";

import InventoryCard from "../InventoryCard/InventoryCard";

const IventoryList = ({ inventory }) => {
  if (inventory.length < 0) {
    return (
      <div>
        <h1>No Items to show</h1>
      </div>
    );
  }
  return (
    <section className="container" style={{ marginTop: "100px" }}>
      {inventory.map(software => (
        <InventoryCard
          key={software.id}
          softwareName={software.softwareName}
          softwareCompany={software.softwareCompany}
          serialNumber={software.serialNumber}
          dateAquired={software.dateAquired}
        />
      ))}
    </section>
  );
};

const mapStateToProps = state => ({
  inventory: Object.values(state.inventory)
});

export default connect(mapStateToProps)(IventoryList);
