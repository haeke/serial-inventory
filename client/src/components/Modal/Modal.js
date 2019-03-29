import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  openModal,
  closeModal,
  editMode,
  deleteSoftwareItem,
  fetchInventory
} from "../../actions/index";

import Button from "../Button/Button";
import EditForm from "../EditForm/EditForm";

import "./Modal.css";

const Modal = ({
  closeModal,
  editMode,
  modal,
  deleteSoftwareItem,
  fetchInventory,
  props
}) => {
  const { inventoryItem, edit_mode } = modal;

  const handleDelete = () => {
    // I'm using a promise chain to make sure that the actions are called in order.
    deleteSoftwareItem(inventoryItem.id)
      .then(() => fetchInventory())
      .then(() => closeModal())
      .catch(error => console.error(error));
  };

  const handleEdit = () => {
    // Navigate to the Edit page pass the object that we are going to modify to the form.
    editMode();
  };
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
            {edit_mode ? (
              <EditForm />
            ) : (
              <React.Fragment>
                <div className="col-md-12">
                  <h1>Company Name: {inventoryItem.softwareCompany}</h1>
                  <h1>Product Name: {inventoryItem.softwareName}</h1>
                  <h2>Serial Number: {inventoryItem.serialNumber}</h2>
                  <h2>Aquired: {inventoryItem.dateAquired}</h2>
                </div>
                <div className="col-md-12">
                  <Button
                    as="button"
                    buttonStyle="editButton"
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                  <Button
                    as={Link}
                    to="/all"
                    onClick={handleDelete}
                    buttonStyle="deleteButton"
                  >
                    Delete
                  </Button>
                </div>
              </React.Fragment>
            )}
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
  { openModal, editMode, closeModal, deleteSoftwareItem, fetchInventory }
)(Modal);
