import CREATE_INVENTORY from "./types";

export const createInventory = formValues => async dispatch => {
  try {
    dispatch({
      type: CREATE_INVENTORY,
      payload: formValues
    });
  } catch (error) {
    console.error(error);
  }
};
