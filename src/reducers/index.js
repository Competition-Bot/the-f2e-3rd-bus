import { combineReducers } from "redux";

import { busReducer } from "./busReducer";

const reducerApp = combineReducers({
  busReducer,
});

export default reducerApp;