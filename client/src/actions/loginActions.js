import { LOGIN_USER, REGISTER_USER, GET_ERRORS } from "./types";
import inventory from "../api/inventory";

export const loginUser = formValues => async dispatch => {
  try {
    let response = await inventory.post("/api/users/login", formValues);
    dispatch({
      type: LOGIN_USER,
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error });
  }
};

export const registerUser = formValues => async dispatch => {
  try {
    let response = await inventory.post("/api/users/register", formValues);
    dispatch({
      type: REGISTER_USER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS
    });
  }
};
