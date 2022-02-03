import PropTypes from "prop-types";
import { useState } from "react";
import CustomDropdown from "components/Dropdown/CustomDropdown";
import OptionCard from "components/Cards/Options/Option";
import { dropdownOptions } from "data/OptionTypes";
import DisplayOptions from "components/Cards/Options/DisplayOptions";
const QuestionCard = ({ question, selected, onClick, setQuestion }) => {
  const [myOptionType, setMyOptionType] = useState(question.optionType);
  const [questionTitle, setQuestionTitle] = useState(question.title);

  const handleTitleChange = (e) => {
    setQuestionTitle(e.target.value);
  };
  const setOptions = (options) => {
    const temp = { ...question };
    temp.options = options;
    setQuestion(question.id, temp);
  };

  return (
    <div
      className={`p-6 rounded-lg border border-hoverGrey bg-white my-4 ${
        selected ? "selected-card" : ""
      }`}
      onClick={() => {
        onClick(question.id);
      }}
    >
      {!selected ? (
        <div>
          <div className="">{question.title}</div>
          <div>
            <DisplayOptions
              options={question.options}
              type={question.optionType.text}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <input
              autoFocus
              className="w-2/3 p-3 bg-grey border-fontGrey border-b focus:outline-none textField focus:border-b-2"
              placeholder="Question"
              value={questionTitle}
              onChange={(e) => handleTitleChange(e)}
            />
            <CustomDropdown
              options={dropdownOptions}
              setSelected={setMyOptionType}
              defaultSelected={myOptionType}
            />
          </div>
          <div className="w-full">
            <OptionCard
              options={question.options}
              type={myOptionType.text}
              setOptions={setOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

QuestionCard.defaultProps = {
  question: {
    title: "Untitles Question",
    optionType: dropdownOptions[2],
    options: [{ text: "Option 1" }],
  },
  selected: false,
};
QuestionCard.propTypes = {
  question: PropTypes.object,
  selected: PropTypes.bool,
};

export default QuestionCard;
