import { createSlice } from "@reduxjs/toolkit";

export const allFormsSlice = createSlice({
  name: "allForms",
  initialState: {
    loading: true,
    forms: [],
    error: null,
  },
  reducers: {
    setForms: (state, action) => {
      state.forms = action.payload.forms;
      state.error = action.payload.error;
    },
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { setForms, setLoading, forms, loading } = allFormsSlice.actions;
export default allFormsSlice.reducer;
