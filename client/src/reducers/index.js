// The root reducer where we will combine all of our reducers
import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import modal from "./modalReducer";
import errors from "./errorsReducer";

const rootReducer = combineReducers({
  inventory: inventory,
  modal: modal,
  errors: errors
});

export default rootReducer;
