import { createSlice } from "@reduxjs/toolkit";
import createQuestion from "components/helpers/createQuestion";
import generateKey from "components/helpers/generateKey";

export const formSlice = createSlice({
  name: "Untitled Form",
  initialState: {
    loading: false,
    saved: "",
    id: "",
    theme: {
      color: "purple",
      font: "basic",
      backgroundOpacity: 10,
    },
    title: "Untitled Form",
    description: "",
    questions: [createQuestion(0)],
    date: "",
    shared: true,
    error: null,
  },
  reducers: {
    addQuestion: (state, action) => {
      const temp = [...state.questions];
      const question = action.payload.question;
      temp.push(question);
      state.questions = temp;
    },
    setQuestion: (state, action) => {
      const temp = [...state.questions];
      const ind = temp.findIndex((x) => x.id === action.payload.id);
      temp[ind] = action.payload.question;
      state.questions = temp;
    },
    removeQuestion: (state, action) => {
      const temp = state.questions;
      const index = temp.findIndex((e) => e.id === action.payload.id);
      temp.splice(index, 1);
      state.questions = temp;
    },
    setDraggedQuestion: (state, action) => {
      const result = action.payload.result;
      const temp = [...state.questions];
      const [reorderedItem] = temp.splice(result.source.index, 1);
      temp.splice(result.destination.index, 0, reorderedItem);
      state.questions = temp;
    },
    duplicateQuestion: (state, action) => {
      const temp = state.questions;
      const index = temp.findIndex((e) => e.id === action.payload.id);
      const question = { ...action.payload.question };
      question.id = generateKey("question" + index);
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
    setForm: (state, action) => {
      if (action.payload.error) state.error = action.payload.error;
      else {
        state.id = action.payload.id;
        state.theme = action.payload.theme;
        state.title = action.payload.title;
        state.description = action.payload.description;
        state.questions = action.payload.questions;
        state.loading = false;
        state.date = action.payload.date;
        state.shared = action.payload.shared;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSaved: (state, action) => {
      state.saved = action.payload;
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
  setDraggedQuestion,
  setForm,
  setLoading,
  setSaved,
} = formSlice.actions;
export default formSlice.reducer;
