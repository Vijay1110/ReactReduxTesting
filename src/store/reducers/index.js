import { combineReducers } from "redux";
import PlanReducer from "./planReducer";

export default combineReducers({
  plans: PlanReducer
});
