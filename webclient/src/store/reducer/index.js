import { combineReducers } from "redux";

import iva from "./iva";
import fisco from "./fisco";

// RootReducer
export default combineReducers({
  iva,
  fisco,
});
