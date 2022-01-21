import questionReducer from "./questionReducer";
import isLoggedReducer from "./isLoggedReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  questions: questionReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;
