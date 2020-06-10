import { combineReducers } from "redux";

import auth from "./auth";
import iva from "./iva";
import fisco from "./fisco";

// RootReducer
export default combineReducers({
  auth,
  iva,
  fisco,
});
