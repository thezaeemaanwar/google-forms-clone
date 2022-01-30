import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
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
  },
});

export const { addQuestion, removeQuestion } = questionSlice.actions;
export default questionSlice.reducer;
