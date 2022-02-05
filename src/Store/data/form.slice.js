import { createSlice } from "@reduxjs/toolkit";
import createQuestion from "components/Helpers/CreateQuestion";
import generateKey from "components/Helpers/GenerateKey";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    theme: {
      color: "purple",
      font: "basic",
      backgroundOpacity: 10,
    },
    title: "",
    description: "",
    questions: [createQuestion(0)],
  },
  reducers: {
    addQuestion: (state, action) => {
      const temp = [...state.questions];
      const question = action.payload.question;
      console.log(question);
      temp.push(question);
      console.log(temp);
      state.questions = temp;
    },
    setQuestion: (state, action) => {
      const temp = [...state.questions];
      const ind = temp.findIndex((x) => x.id === action.payload.id);
      temp[ind] = action.payload.question;
      console.log(temp);
      state.questions = temp;
    },
    removeQuestion: (state, action) => {
      console.log("rmeove questio", action.payload);
      const temp = state.questions;
      const index = temp.findIndex((e) => e.id === action.payload.id);
      temp.splice(index, 1);
      console.log(temp);
      state.questions = temp;
    },
    duplicateQuestion: (state, action) => {
      const temp = state.questions;
      const index = temp.findIndex((e) => e.id === action.payload.id);
      console.log(index);
      const question = { ...action.payload.question };
      question.id = generateKey(index);
      temp.splice(index, 0, question);
      state.questions = temp;
    },
    setColor: (state, action) => {
      state.theme.color = action.payload.color;
    },
    setFont: (state, action) => {
      state.theme.font = action.payload.font;
    },
    setBackgroundOpacity: (state, action) => {
      state.theme.backgroundOpacity = action.payload.opacity;
    },
    setTitle: (state, action) => {
      state.title = action.payload.title;
    },
    setDescription: (state, action) => {
      state.description = action.payload.description;
    },
  },
});

export const {
  addQuestion,
  setQuestion,
  removeQuestion,
  theme,
  setColor,
  setFont,
  setBackgroundOpacity,
  setTitle,
  setDescription,
  duplicateQuestion,
} = formSlice.actions;
export default formSlice.reducer;
