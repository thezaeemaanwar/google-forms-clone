import { configureStore } from "@reduxjs/toolkit";
import authReducer from "store/authentication/authentication.slice";
import questionReducer from "store/data/question.slice";

export default configureStore({
  reducer: {
    authentication: authReducer,
    questions: questionReducer,
  },
});
