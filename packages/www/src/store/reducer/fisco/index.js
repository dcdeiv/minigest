import { combineReducers } from "redux";
import interessiLegali from "./interessiLegali";
import regimeFiscale from "./regimeFiscale";
import tur from "./tur";

// RootReducer
export default combineReducers({
  interessiLegali: interessiLegali,
  regimeFiscale: regimeFiscale,
  tur: tur,
});
