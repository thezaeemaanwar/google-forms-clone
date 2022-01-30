import { configureStore } from "@reduxjs/toolkit";
import authReducer from "store/authentication/authentication.actions";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
