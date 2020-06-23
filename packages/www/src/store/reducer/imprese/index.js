import { combineReducers } from "redux";
import dettagli from "./dettagli";
import lista from "./lista";

// RootReducer
export default combineReducers({ dettagli: dettagli, lista: lista });
