import { createSlice } from "@reduxjs/toolkit";
import { IsSignedIn } from "services/firebase/firebase.auth";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loading: true,
    logged: false,
    user: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.loading = false;
      state.logged = true;
      state.user = action.payload.user;
      state.error = action.payload.error;
    },
    logout: (state, action) => {
      state.loading = false;
      state.logged = false;
      state.user = action.payload.user;
      state.error = action.payload.error;
    },
    loading: (state) => {
      state.loading = true;
    },
    checkLogged: (state) => {
      const user = IsSignedIn();
      if (user) {
        state.loading = false;
        state.logged = true;
        state.user = user;
        state.error = null;
      } else {
        state.loading = false;
        state.logged = false;
        state.user = null;
        state.error = null;
      }
    },
  },
});

export const { login, logout, loading, checkLogged } = authSlice.actions;
export default authSlice.reducer;
