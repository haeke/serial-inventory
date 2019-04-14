// The root reducer where we will combine all of our reducers
import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import modal from "./modalReducer";
import auth from "./authReducer";
import errors from "./errorsReducer";

const rootReducer = combineReducers({
  inventory: inventory,
  auth: auth,
  modal: modal,
  errors: errors
});

export default rootReducer;
