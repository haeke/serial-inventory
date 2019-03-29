import {
  CREATE_INVENTORY,
  EDIT_INVENTORY,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_INVENTORY,
  DELETE_INVENTORY_ITEM
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
// Responsible for editing a software item's fields in the inventory reducer, we just need to make a patch request to /inventory/softwareID to update the fields that need to change (Don't use a put request unless you want to replace all fields).
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

// Responsible for getting all of the items inside of the json-server, we just need to make a request to the /inventory route.
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

// Responsible for deleting an item from the json-server, we just need to pass the softwareID to the redux store to remove the item from the inventory Reducer and send a delete request to the json-server database to remove the item.
export const deleteSoftwareItem = softwareID => async dispatch => {
  try {
    await inventory.delete(`/inventory/${softwareID}`);

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
