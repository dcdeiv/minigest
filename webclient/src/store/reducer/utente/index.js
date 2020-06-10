import { combineReducers } from "redux";
import auth from "./auth";
import utente from "./utente";

// RootReducer
export default combineReducers({ auth, utente });
