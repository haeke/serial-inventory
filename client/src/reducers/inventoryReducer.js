import _ from "lodash";
import { CREATE_INVENTORY, FETCH_INVENTORY } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INVENTORY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_INVENTORY:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
    default:
      return state;
  }
};
