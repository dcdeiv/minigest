import { combineReducers } from "redux";
import impreseList from "./list";
import impreseDettagli from "./dettagli";

// RootReducer
export default combineReducers({
  lista: impreseList,
  dettagli: impreseDettagli,
});
