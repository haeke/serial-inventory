import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";
import { createInventory } from "../../actions/index";

import Button from "../Button/Button";

import "./InventoryForm.css";

// The useForm hook allows us to reuse state inside of our form when we want to use a controlled form. We are using redux to provide the app with a global inventory state object for now but in the future there will be other global state objects.

const InventoryForm = ({ createInventory }) => {
  // get the values from the useForm hook
  const { values, errors, handleChange, handleSubmit } = useForm(
    addInventory,
    validate
  );

  function addInventory() {
    console.log("inventory item added.");
    // pass the values object to the createInventory action
    createInventory(values);
  }

  return (
    <section className="container">
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
            value={values.softwareName || ""}
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
            value={values.softwareCompany || ""}
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
            value={values.serialNumber || ""}
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
            value={values.dateAquired || ""}
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
      <Button as={Link} to="/all" buttonStyle="primaryButton">
        Inventory List
      </Button>
    </section>
  );
};

// use the connect function to mapStateToProps and mapDispatchToProps
export default connect(
  null,
  { createInventory }
)(InventoryForm);
