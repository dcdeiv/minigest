import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import middleware from "./middleware";

export default compose(middleware)(createStore)(rootReducer);
