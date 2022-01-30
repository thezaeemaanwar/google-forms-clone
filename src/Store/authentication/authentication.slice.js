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
  },
});

export const { login, logout, loading } = authSlice.actions;
export default authSlice.reducer;
