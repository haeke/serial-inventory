import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchInventory } from "../../actions/index";

import InventoryCard from "../InventoryCard/InventoryCard";

import "./InventoryList.css";

const IventoryList = ({ inventory, fetchInventory, errors }) => {
  // We want to call useEffect when the inventory prop does not have any items inside
  useEffect(() => {
    if (Object.keys(inventory).length === 0) {
      fetchInventory();
    }
  }, [inventory]);
  if (errors.Error) {
    return (
      <section className="inventoryListContainer">
        <div className="container">
          <div className="inventoryListMargin">
            <h1 className="text-center" style={{ color: "white" }}>
              {errors.Error}
            </h1>
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
              key={software._id}
              softwareID={software._id}
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
  inventory: Object.values(state.inventory),
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { fetchInventory }
)(IventoryList);
