import { combineReducers } from "redux";

// Reducers
import utente from "./utente";
import fisco from "./fisco";
import iva from "./iva";

// RootReducer
export default combineReducers({
  utente: utente,
  fisco: fisco,
  iva: iva,
});
