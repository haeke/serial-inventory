// The errors reducer will create an object that we will use to display a message to the user when there is an error on the page.

import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
