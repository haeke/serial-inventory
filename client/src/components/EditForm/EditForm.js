import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";
import { connect } from "react-redux";
import { editInventory, editMode, closeModal } from "../../actions/index";

import Button from "../Button/Button";

import "./EditForm.css";

const EditForm = ({ modal, editMode, closeModal, editInventory }) => {
  const { inventoryItem } = modal;

  const { values, errors, handleChange, handleSubmit } = useForm(
    editItem,
    validate
  );

  function editItem() {
    // pass the values that we want to update
    editInventory(inventoryItem.id, values)
      .then(() => editMode())
      .then(() => closeModal());
  }
  return (
    <section className="editFormContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="editFormHeader">Edit Software Item</h1>
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="formWrapper">
                <label htmlFor="Software Name" className="formLabel">
                  Software Name
                </label>
                <small
                  style={
                    errors.softwareName
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.softwareName}
                </small>
                <input
                  type="text"
                  className={`formInput ${errors.softwareName && "redBorder"}`}
                  name="softwareName"
                  value={values.softwareName || inventoryItem.softwareName}
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Company Name" className="formLabel">
                  Company Name
                </label>
                <small
                  style={
                    errors.softwareCompany
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.softwareCompany}
                </small>
                <input
                  type="text"
                  className={`formInput ${errors.softwareCompany &&
                    "redBorder"}`}
                  name="softwareCompany"
                  value={
                    values.softwareCompany || inventoryItem.softwareCompany
                  }
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Software Name" className="formLabel">
                  Serial Number
                </label>
                <small
                  style={
                    errors.serialNumber
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.serialNumber}
                </small>
                <input
                  type="text"
                  className={`formInput ${errors.serialNumber && "redBorder"}`}
                  name="serialNumber"
                  value={values.serialNumber || inventoryItem.serialNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Date Aquired" className="formLabel">
                  Date Aquired
                </label>
                <small
                  style={
                    errors.dateAquired
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.dateAquired}
                </small>
                <input
                  type="date"
                  className={`formInput ${errors.dateAquired && "redBorder"}`}
                  name="dateAquired"
                  value={values.dateAquired || inventoryItem.dateAquired}
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <button type="submit" onClick={handleSubmit}>
                  Edit
                </button>
                <Button
                  as={Link}
                  to="/all"
                  buttonStyle="primaryButton"
                  onClick={handleSubmit}
                >
                  Edit Item
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(
  mapStateToProps,
  { editInventory, editMode, closeModal }
)(EditForm);
