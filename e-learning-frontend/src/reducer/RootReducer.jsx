import { combineReducers } from "redux";
import { SubjectReducer } from "./../reducer/SubjectReducer";
export const RootReducer = combineReducers({
  SubjectReducer: SubjectReducer,
});
