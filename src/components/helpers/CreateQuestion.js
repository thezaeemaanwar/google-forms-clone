import generateKey from "components/helpers/generateKey";
import { MULTIPLE_CHOICE } from "data/optionTypes";
import createOption from "components/helpers/createOption";

const createQuestion = (len) => {
  const question = {
    id: generateKey("question" + len),
    title: "Question",
    optionType: MULTIPLE_CHOICE,
    options: [createOption(0)],
    required: false,
  };
  return question;
};
export default createQuestion;
