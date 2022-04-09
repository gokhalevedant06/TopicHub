import { combineReducers } from "redux";

import userReducer from "./userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
