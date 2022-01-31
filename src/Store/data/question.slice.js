import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    theme: {
      color: "purple",
      font: "",
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
  },
});

export const { addQuestion, removeQuestion, theme } = questionSlice.actions;
export default questionSlice.reducer;
