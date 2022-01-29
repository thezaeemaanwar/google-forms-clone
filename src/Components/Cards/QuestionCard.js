import PropTypes from "prop-types";
import { useState } from "react";
import CustomDropdown from "components/Dropdown/CustomDropdown";
import {
  faAlignLeft,
  faCalendarDay,
  faCheckSquare,
  faChevronDown,
  faCloudUploadAlt,
  faEllipsisH,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle, faClock } from "@fortawesome/free-regular-svg-icons";
import OptionCard from "./Options/Option";

const QuestionCard = ({ question, selected }) => {
  const dropdownOptions = [
    { id: 1, text: "Short answer", icon: faAlignLeft },
    { id: 2, text: "Paragraph", icon: faAlignLeft },
    { id: 3, text: "Multiple choice", icon: faDotCircle },
    { id: 4, text: "Checkbox", icon: faCheckSquare },
    { id: 5, text: "Dropdown", icon: faChevronDown },
    { id: 6, text: "File upload", icon: faCloudUploadAlt },
    { id: 7, text: "Linear scale", icon: faEllipsisH },
    { id: 8, text: "Multiple choice grid", icon: faGripHorizontal },
    { id: 9, text: "Checkbox grid", icon: faGripHorizontal },
    { id: 10, text: "Date", icon: faCalendarDay },
    { id: 11, text: "Time", icon: faClock },
  ];
  const [myOptionType, setMyOptionType] = useState(question.optionType);
  const [questionTitle, setQuestionTitle] = useState(question.title);
  const handleTitleChange = (e) => {
    setQuestionTitle(e.target.value);
  };

  console.log("Question Type : ", myOptionType);
  return (
    <div
      className={`p-6 rounded-lg border border-hoverGrey bg-white my-4 ${
        selected ? "selected-card" : ""
      }`}
    >
      {selected ? (
        <div className="">{question.title}</div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <input
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
            {question.options.map((op) => (
              <OptionCard
                key={op.id}
                options={question.options}
                type={myOptionType.text}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

QuestionCard.defaultProps = {
  question: {
    title: "Untitles Question",
    optionType: { id: 3, text: "Multiple choice", icon: faDotCircle },
    options: [{ text: "Option 1" }],
  },
  selected: false,
};
QuestionCard.propTypes = {
  question: PropTypes.object,
  selected: PropTypes.bool,
};

export default QuestionCard;
