import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    theme: {
      color: "purple",
      font: "basic",
      backgroundOpacity: 10,
    },
    questions: [],
    question_number: 0,
  },
  reducers: {
    addQuestion: (state, action) => {
      const temp = state.questions;
      temp.push(action.payload.question);
      state.questions = temp;
    },
    removeQuestion: (state, action) => {
      const temp = state.questions;
      temp.slice(action.payload.index, 1);
      state.questions = temp;
    },
    setColor: (state, action) => {
      state.theme.color = action.payload.color;
    },
    setFont: (state, action) => {
      state.theme.font = action.payload.font;
    },
    setBackgroundOpacity: (state, action) => {
      console.log("Set bg opacity: ", action.payload.opacity);
      state.theme.backgroundOpacity = action.payload.opacity;
    },
  },
});

export const {
  addQuestion,
  removeQuestion,
  theme,
  setColor,
  setFont,
  setBackgroundOpacity,
} = formSlice.actions;
export default formSlice.reducer;
