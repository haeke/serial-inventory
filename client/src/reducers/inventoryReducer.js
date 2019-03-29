import _ from "lodash";
import {
  CREATE_INVENTORY,
  EDIT_INVENTORY,
  FETCH_INVENTORY,
  DELETE_INVENTORY_ITEM
} from "../actions/types";

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
    case EDIT_INVENTORY:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    // We pass the softwareID of the item that we want to delete, we can use lodash's omit function to remove the item with the particular id from the inventory reducer.
    case DELETE_INVENTORY_ITEM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
