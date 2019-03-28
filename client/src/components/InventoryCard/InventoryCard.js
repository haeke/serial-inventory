import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { openModal } from "../../actions/index";

import "./InventoryCard.css";

const InventoryCard = ({
  inventory,
  softwareID,
  softwareName,
  softwareCompany,
  serialNumber,
  dateAquired,
  openModal
}) => {
  const handleCardClick = softwareID => {
    // When we click on an InventoryCard component we can use the index to get the values for the Card that we clicked. It will be added to the ModalReducers under the property modal.inventoryItem. The shape is :
    // inventoryItem: {
    //   softwareName: 'Adobe Acrobat',
    //   softwareCompany: 'Adobe',
    //   serialNumber: 'AWOJq0-12309-ASDQW',
    //   dateAquired: '1999-02-23',
    //   id: 'e76e57ef-bbd6-4cd9-8061-6f66dbc8e42c'
    // }
    openModal(inventory[softwareID]);
  };
  return (
    <div
      role="button"
      onClick={() => handleCardClick(softwareID)}
      className="col-md-4 col-sm-6 col xs-12 card"
    >
      <div>
        <label htmlFor="Software Name">Software Name</label>
        <h1>{softwareName}</h1>
      </div>
      <div>
        <label htmlFor="Software Company">Software Company</label>
        <h2>{softwareCompany}</h2>
      </div>
      <div>
        <label htmlFor="Serial Number">Serial Number</label>
        <h3>{serialNumber}</h3>
      </div>
      <div>
        <label htmlFor="Date Aquired">Date Aquired</label>
        <h4>{dateAquired}</h4>
      </div>
    </div>
  );
};

InventoryCard.propTypes = {
  softwareID: PropTypes.string,
  softwareName: PropTypes.string,
  softwareCompany: PropTypes.string,
  serialNumber: PropTypes.string,
  dateAquired: PropTypes.string,
  openModal: PropTypes.func
};

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(
  mapStateToProps,
  { openModal }
)(InventoryCard);
