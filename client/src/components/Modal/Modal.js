import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { openModal, closeModal } from "../../actions/index";

import Button from "../Button/Button";

import "./Modal.css";

const Modal = ({ closeModal, modal }) => {
  const { inventoryItem } = modal;
  if (modal.openModal === false) {
    return <React.Fragment />;
  }
  return ReactDOM.createPortal(
    <div>
      <div id="modalDialog">
        <div className="modalContainer">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="modalHeader">Manage Software</h1>
              <Button
                as="button"
                onClick={closeModal}
                buttonStyle="modalButton"
              >
                <i className="fas fa-times closeIcon" />
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1>Company Name: {inventoryItem.softwareCompany}</h1>
              <h1>Product Name: {inventoryItem.softwareName}</h1>
              <h2>Serial Number: {inventoryItem.serialNumber}</h2>
              <h2>Aquired: {inventoryItem.dateAquired}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(
  mapStateToProps,
  { openModal, closeModal }
)(Modal);
