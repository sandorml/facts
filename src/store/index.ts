import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import appReducer from "./reducers";

export default createStore(
  appReducer,
  applyMiddleware(logger, thunk)
);
