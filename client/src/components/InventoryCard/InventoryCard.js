import React from "react";
import PropTypes from "prop-types";

import "./InventoryCard.css";

const InventoryCard = ({
  softwareName,
  softwareCompany,
  serialNumber,
  dateAquired
}) => {
  return (
    <div className="col-md-4 col-sm-6 col xs-12 card">
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
  softwareName: PropTypes.string,
  softwareCompany: PropTypes.string,
  serialNumber: PropTypes.string,
  dateAquired: PropTypes.string
};

export default InventoryCard;
