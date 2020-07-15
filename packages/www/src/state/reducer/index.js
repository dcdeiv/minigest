import { combineReducers } from "redux";

// Reducers
import utente from "./utente";
import fisco from "./fisco";

// RootReducer
export default combineReducers({
  utente: utente,
  fisco: fisco,
});
