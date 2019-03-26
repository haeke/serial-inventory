import { CREATE_INVENTORY } from "./types";
import uuid from "random-uuid-v4";

// We are using getState to set the ID of the object that we are going to add to the store. We are using the uuid package for now to generate a unique ID for all inventory items.
export const createInventory = formValues => async dispatch => {
  try {
    let newItem = { ...formValues, id: uuid() };
    dispatch({
      type: CREATE_INVENTORY,
      payload: newItem
    });
  } catch (error) {
    console.error(error);
  }
};
