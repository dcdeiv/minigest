import { combineReducers } from "redux";
import aliquote from "./aliquote";
import aliquoteQ from "./aliquoteQ";

// RootReducer
export default combineReducers({ aliquote: aliquote, aliquoteQ: aliquoteQ });
