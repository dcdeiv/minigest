import { combineReducers } from "redux";

import utente from "./utente";
import iva from "./iva";
import fisco from "./fisco";

// RootReducer
export default combineReducers({
  utente,
  iva,
  fisco,
});
