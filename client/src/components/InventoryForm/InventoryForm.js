import React from "react";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";

import "./InventoryForm.css";

const InventoryForm = () => {
  // get the values from the useForm hook
  const { values, errors, handleChange, handleSubmit } = useForm(
    addInventory,
    validate
  );

  console.log("values ", values);
  console.log("errors object ", errors);
  function addInventory() {
    console.log("inventory item added.");
  }

  return (
    <div className="container">
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
          <button onClick={handleSubmit}>Add Inventory</button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
