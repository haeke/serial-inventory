import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchInventory } from "../../actions/index";

import InventoryCard from "../InventoryCard/InventoryCard";

const IventoryList = ({ inventory, fetchInventory }) => {
  // We want to call useEffect when the inventory prop does not have any items inside
  useEffect(() => {
    if (Object.keys(inventory).length === 0) {
      fetchInventory();
    }
  }, []);
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

export default connect(
  mapStateToProps,
  { fetchInventory }
)(IventoryList);
