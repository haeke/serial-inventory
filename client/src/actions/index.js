import {
  CREATE_INVENTORY,
  EDIT_INVENTORY,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_INVENTORY
} from "./types";
import uuid from "random-uuid-v4";

import inventory from "../api/inventory";

// We are using getState to set the ID of the object that we are going to add to the store. We are using the uuid package for now to generate a unique ID for all inventory items.
export const createInventory = formValues => async dispatch => {
  let newItem = { ...formValues, id: uuid() };
  try {
    let response = await inventory.post("/inventory", newItem);
    dispatch({
      type: CREATE_INVENTORY,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};

export const editInventory = (inventoryID, formValues) => async dispatch => {
  try {
    // Create a patch request to update the Form Value items.
    let response = await inventory.patch(
      `/inventory/${inventoryID}`,
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

// Responsible for getting all of the items inside of the json-server
export const fetchInventory = () => async dispatch => {
  try {
    let response = await inventory.get("/inventory");

    dispatch({
      type: FETCH_INVENTORY,
      payload: response.data
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
