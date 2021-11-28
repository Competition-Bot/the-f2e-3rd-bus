import { combineReducers } from "redux";

import { busReducer } from "./busReducer";
import { planReducer } from "./planReducer";

const reducerApp = combineReducers({
  busReducer,
  planReducer,
});

export default reducerApp;
