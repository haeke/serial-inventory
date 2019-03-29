import React from "react";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";
import { connect } from "react-redux";
import { editInventory } from "../../actions/index";

import Button from "../Button/Button";

import "./EditForm.css";

const EditForm = ({ modal, editInventory }) => {
  const { inventoryItem } = modal;

  const { values, errors, handleChange, handleSubmit } = useForm(
    editItem,
    validate
  );

  function editItem() {
    // pass the values that we want to update
    editInventory(inventoryItem.id, values);
  }
  return (
    <section className="editFormContainer">
      <div className="container">
        <div className="row">
          <h1 className="inventoryFormHeader">Edit Software Item</h1>
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
                className={`formInput ${errors.softwareCompany && "redBorder"}`}
                name="softwareCompany"
                value={values.softwareCompany || inventoryItem.softwareCompany}
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
              <Button
                as="button"
                buttonStyle="primaryButton"
                onClick={handleSubmit}
              >
                Add Inventory
              </Button>
            </div>
          </form>
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
  { editInventory }
)(EditForm);
