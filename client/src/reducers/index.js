// The root reducer where we will combine all of our reducers
import { combineReducers } from "redux";
import inventory from "./inventoryReducer";

const rootReducer = combineReducers({
  inventory: inventory
});

export default rootReducer;
