import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchInventory } from "../../actions/index";

import InventoryCard from "../InventoryCard/InventoryCard";

import "./InventoryList.css";

const IventoryList = ({ inventory, fetchInventory }) => {
  // We want to call useEffect when the inventory prop does not have any items inside
  useEffect(() => {
    if (Object.keys(inventory).length === 0) {
      fetchInventory();
    }
  }, [inventory]);
  if (inventory.length <= 0) {
    return (
      <section className="inventoryListContainer">
        <div className="container">
          <div className="inventoryListMargin">
            <h1 className="text-center">No Items to show</h1>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="inventoryListContainer">
      <div className="container">
        <div className="inventoryListMargin">
          {inventory.map(software => (
            <InventoryCard
              key={software.id}
              softwareID={software.id}
              softwareName={software.softwareName}
              softwareCompany={software.softwareCompany}
              serialNumber={software.serialNumber}
              dateAquired={software.dateAquired}
            />
          ))}
        </div>
      </div>
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
