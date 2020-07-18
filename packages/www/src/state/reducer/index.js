import { combineReducers } from "redux";

// Reducers
import utente from "./utente";
import fisco from "./fisco";
import iva from "./iva";
import soggettiFiscali from "./soggettiFiscali";

// RootReducer
export default combineReducers({
  utente: utente,
  fisco: fisco,
  iva: iva,
  soggettiFiscali: soggettiFiscali,
});
