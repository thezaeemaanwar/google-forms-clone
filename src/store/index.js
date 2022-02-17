import { configureStore } from "@reduxjs/toolkit";
import authReducer from "store/authentication/authentication.slice";
import formReducer from "store/data/form.slice";
import allFormSReducder from "store/data/allForms.slice";

export default configureStore({
  reducer: {
    authentication: authReducer,
    form: formReducer,
    allForms: allFormSReducder,
  },
});
