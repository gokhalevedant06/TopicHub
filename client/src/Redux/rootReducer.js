import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";

const authPersistConfig = {
  key: "user",
  storage,
  keyPrefix: "redux-",
  blacklist: ["isLoggenIn"],
};

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
});

export default rootReducer;
