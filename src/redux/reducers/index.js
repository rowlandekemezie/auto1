import { combineReducers } from "redux";
import cars from "./cars";
import colors from "./colors";
import manufacturers from "./manufacturers";

const rootReducer = combineReducers({
  cars,
  colors,
  manufacturers
});

export default rootReducer;
