import { QUESTIONS, QUESTION_NUMBER } from "Store/Actions/actionTypes";

const initialState = {
  questions: [],
  question_number: 0,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS:
      return state.questions;
    case QUESTION_NUMBER:
      return state.question_number;
    default:
      return 0;
  }
};

export default questionReducer;
