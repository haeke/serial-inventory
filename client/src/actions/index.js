import {
  CREATE_INVENTORY,
  EDIT_INVENTORY,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_INVENTORY,
  DELETE_INVENTORY_ITEM,
  EDIT_MODE,
  GET_ERRORS
} from "./types";
import uuid from "random-uuid-v4";

import inventory from "../api/inventory";

// We are using getState to set the ID of the object that we are going to add to the store. We are using the uuid package for now to generate a unique ID for all inventory items.
export const createInventory = formValues => async dispatch => {
  let newItem = { ...formValues, _id: uuid() };
  try {
    let response;
    // This will only be used for testing purposes
    if (process.env.REACT_APP_TEST === "testing") {
      response = await inventory.post("/api/software", newItem);
    } else {
      response = await inventory.post("/inventory", newItem);
    }
    console.log(response);
    dispatch({
      type: CREATE_INVENTORY,
      payload: response.data
    });
  } catch (error) {
    // dispatch the GET_ERRORS action
    dispatch({
      type: GET_ERRORS,
      payload: { errors: "Could not create item" }
    });
  }
};
// Responsible for editing a software item's fields in the inventory reducer, we just need to make a patch request to /inventory/softwareID to update the fields that need to change (Don't use a put request unless you want to replace all fields).
export const editInventory = (inventoryID, formValues) => async dispatch => {
  console.log("the inventory id ", inventoryID);
  try {
    // Create a patch request to update the Form Value items.
    let response = await inventory.patch(
      `/api/software/${inventoryID}`,
      formValues
    );

    dispatch({
      type: EDIT_INVENTORY,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};

// Responsible for getting all of the items inside of the json-server, we just need to make a request to the /inventory route.
export const fetchInventory = () => async dispatch => {
  try {
    let response;
    // This is for testing the express server before pushing to production
    if (process.env.REACT_APP_TEST === "testing") {
      response = await inventory.get("/api/software");
    } else {
      response = await inventory.get("/inventory");
    }
    dispatch({
      type: FETCH_INVENTORY,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: { Error: "Could not get data." }
    });
  }
};

// Responsible for deleting an item from the json-server, we just need to pass the softwareID to the redux store to remove the item from the inventory Reducer and send a delete request to the json-server database to remove the item.
export const deleteSoftwareItem = softwareID => async dispatch => {
  try {
    await inventory.delete(`/api/software/${softwareID}`);

    dispatch({
      type: DELETE_INVENTORY_ITEM,
      payload: softwareID
    });
  } catch (error) {
    console.error(error);
  }
};

// Used to open and close the Modal component
export const openModal = softwareID => dispatch => {
  return dispatch({
    type: OPEN_MODAL,
    payload: softwareID
  });
};
export const closeModal = () => dispatch => {
  return dispatch({
    type: CLOSE_MODAL
  });
};

// Set the Modal to edit Mode so that we can render the edit form
export const editMode = () => dispatch => {
  return dispatch({
    type: EDIT_MODE
  });
};
