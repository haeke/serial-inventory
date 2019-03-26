import { CREATE_INVENTORY } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INVENTORY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};
