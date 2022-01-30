import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loading: true,
    logged: false,
    user: null,
    error: null,
  },
  reducers: {
    loggedIn: (state, action) => {
      console.log("User: ", action.payload.user);
      state.loading = false;
      state.logged = true;
      state.user = action.payload.user;
      state.error = action.payload.error;
    },
    loggedOut: (state, action) => {
      state.loading = false;
      state.logged = false;
      state.user = null;
      state.error = null;
    },
    loading: (state) => {
      state.loading = true;
    },
  },
});

export const { login, logout, loading, checkLogged, loggedIn, loggedOut } =
  authSlice.actions;
export default authSlice.reducer;
