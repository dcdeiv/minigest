import { combineReducers } from "redux";

import utente from "./utente";
import iva from "./iva";
import fisco from "./fisco";
import imprese from "./imprese";

// RootReducer
export default combineReducers({
  utente: utente,
  iva: iva,
  fisco: fisco,
  imprese: imprese,
});
