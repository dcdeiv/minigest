import { combineReducers } from "redux";
import impreseList from "./list";
import impreseDettagli from "./dettagli";
import impreseOptions from "./options";

// RootReducer
export default combineReducers({
  lista: impreseList,
  dettagli: impreseDettagli,
  options: impreseOptions,
});
