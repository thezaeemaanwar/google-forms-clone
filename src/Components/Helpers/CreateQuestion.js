import generateKey from "components/Helpers/GenerateKey";
import { MULTIPLE_CHOICE } from "data/OptionTypes";
import createOption from "components/Helpers/CreateOption";

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
