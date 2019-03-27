import { CREATE_INVENTORY } from "./types";
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
