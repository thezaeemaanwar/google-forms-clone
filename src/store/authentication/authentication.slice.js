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
    setUser: (state, action) => {
      state.loading = false;
      action.payload.user ? (state.logged = true) : (state.logged = false);
      state.user = action.payload.user;
      state.error = action.payload.error;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
