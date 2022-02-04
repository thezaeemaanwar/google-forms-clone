import PropTypes from "prop-types";
import { useState } from "react";
import CustomDropdown from "components/Dropdown/CustomDropdown";
import OptionCard from "components/Cards/Options/Option";
import { dropdownOptions } from "data/OptionTypes";
import DisplayOptions from "components/Cards/Options/DisplayOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Slider from "components/Slider/Slider";
import { useSelector } from "react-redux";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon/Icon";

const QuestionCard = ({ question, selected, onClick, setQuestion }) => {
  const { theme } = useSelector((state) => state.form);
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

  const toggleRequired = (e) => {
    const temp = { ...question };
    temp.required = !question.required;
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
          <div className="flex w-full ">
            <div className="self-start">{question.title}</div>
            {question.required ? (
              <div className="text-red-700 mx-2">*</div>
            ) : (
              <div></div>
            )}
          </div>
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
          <div className="p-3 w-full border-t-2 border-hoverGrey mt-5 flex items-center justify-end text-fontGrey text-xl">
            <Icon icon={faClone} label="Duplicate" />
            <Icon icon={faTrashAlt} label="Delete Question" />
            <div className=" mr-4 h-8 self-center border-r-2 border-hoverGrey"></div>
            <div className="mr-4 flex items-center justify-center">
              <div className="mr-4 text-sm text-black self-center">
                Required
              </div>
              <Slider
                className="mr-4 self-center"
                theme={theme}
                required={question.required}
                toggleRequired={toggleRequired}
              />
            </div>
            <Icon icon={faEllipsisV} label="More" />
          </div>
        </div>
      )}
      {/* QUESTION FOOTER */}
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
