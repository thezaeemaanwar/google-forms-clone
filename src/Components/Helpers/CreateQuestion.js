import generateKey from "components/Helpers/GenerateKey";
import { dropdownOptions } from "data/OptionTypes";
import createOption from "components/Helpers/CreateOption";

const createQuestion = (len) => {
  const question = {
    id: generateKey("question" + len),
    title: "Question",
    options: [createOption(0)],
    optionType: dropdownOptions[2],
    required: false,
  };
  return question;
};
export default createQuestion;
