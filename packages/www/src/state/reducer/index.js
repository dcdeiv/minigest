import { combineReducers } from "redux";

// Reducers
import auth from "./auth";
import utenti from "./utenti";
import fisco from "./fisco";
import iva from "./iva";
import soggettiFiscali from "./soggettiFiscali";
import imprese from "./imprese";

// RootReducer
export default combineReducers({
  auth: auth,
  utenti: utenti,
  fisco: fisco,
  iva: iva,
  soggettiFiscali: soggettiFiscali,
  imprese: imprese,
});
