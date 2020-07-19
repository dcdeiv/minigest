import { combineReducers } from "redux";
import dettagliUtente from "./dettagli";

// RootReducer
export default combineReducers({ dettagli: dettagliUtente });
