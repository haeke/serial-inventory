import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reduxTunk from "redux-thunk";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
