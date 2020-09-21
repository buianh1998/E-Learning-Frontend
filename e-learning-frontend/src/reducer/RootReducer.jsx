import { combineReducers } from "redux";
import { SubjectReducer } from "./../reducer/SubjectReducer";
import { CourseReducer } from "./../reducer/CourseReducer";
export const RootReducer = combineReducers({
  SubjectReducer: SubjectReducer,
  CourseReducer: CourseReducer,
});
