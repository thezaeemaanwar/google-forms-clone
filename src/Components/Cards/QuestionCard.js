import PropTypes from "prop-types";
import { useState } from "react";
import CustomDropdown from "components/Dropdown/CustomDropdown";
import OptionCard from "components/Cards/Options/Option";
import { dropdownOptions } from "data/OptionTypes";
import DisplayOptions from "components/Cards/Options/DisplayOptions";
import { faClone, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Slider from "components/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  faEllipsisV,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "components/Icon/Icon";
import {
  setQuestion,
  removeQuestion,
  duplicateQuestion,
  setSaved,
} from "store/data/form.slice";
import createQuestion from "components/Helpers/CreateQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  removeQuestionFromDB,
  setQuestionsInDB,
} from "services/firebase/firebase.firestore";
import { PROGRESS_SAVING, SUCCESS_SAVED } from "data/statusMessages";

const QuestionCard = ({ question, selected, onClick }) => {
  const { id, theme, questions } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [questionTitle, setQuestionTitle] = useState(question.title);

  const setOptionType = (opType) => {
    const temp = { ...question };
    temp.optionType = opType;
    dispatch(setQuestion({ id: question.id, question: temp }));
  };
  const handleTitleChange = (e) => {
    setQuestionTitle(e.target.value);
  };

  const savedCallBack = (status) => {
    if (status.error) dispatch(setSaved("Error Saving data in Drive"));
    dispatch(setSaved(SUCCESS_SAVED));
  };

  const setOptions = (options) => {
    console.log(options);
    const temp = { ...question };
    temp.options = options;
    dispatch(setQuestion({ id: question.id, question: temp }));
    dispatch(setSaved(PROGRESS_SAVING));
    setQuestionsInDB(id, questions, savedCallBack);
  };

  const toggleRequired = (e) => {
    const temp = { ...question };
    temp.required = !question.required;
    dispatch(setQuestion({ id: question.id, question: temp }));
    dispatch(setSaved(PROGRESS_SAVING));
    setQuestionsInDB(id, questions, savedCallBack);
  };

  const deleteQuestion = (qid) => {
    dispatch(setSaved(PROGRESS_SAVING));
    dispatch(removeQuestion({ qid }));
    removeQuestionFromDB(id, question, savedCallBack);
  };

  const handleDuplicateQuestion = (id) => {
    dispatch(duplicateQuestion({ id: question.id, question }));
    dispatch(setSaved(PROGRESS_SAVING));
    setQuestionsInDB(id, questions, savedCallBack);
  };

  const saveTitle = () => {
    const ques = { ...question };
    ques.title = questionTitle;
    dispatch(setQuestion({ id: ques.id, question: ques }));
    dispatch(setSaved(PROGRESS_SAVING));
    console.log("questions", questions);
    setQuestionsInDB(id, questions, savedCallBack);
  };

  return (
    <div
      className={`p-6 pt-2 rounded-lg border border-hoverGrey bg-white my-4 ${
        selected ? "selected-card shadow-md" : ""
      }`}
      onClick={() => {
        onClick(question.id);
      }}
    >
      <div className="w-full flex items-center justify-center opacity-0 hover:opacity-60 transition-opacity ease-in">
        <FontAwesomeIcon
          className="self-center text-fontGrey "
          icon={faGripHorizontal}
        />
      </div>
      {!selected ? (
        <div>
          <div className="flex w-full ">
            <div className={`self-start ${theme.font}-text`}>
              {question.title}
            </div>
            {question.required ? (
              <div className="text-red mx-2">*</div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <DisplayOptions
              options={question.options}
              type={question.optionType}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <input
              autoFocus
              className={`w-2/3 p-3 bg-grey border-fontGrey border-b focus:outline-none ${theme.color}TextField ${theme.font}-text focus:border-b-2`}
              placeholder="Question"
              value={questionTitle}
              onChange={(e) => handleTitleChange(e)}
              onBlur={saveTitle}
            />
            <CustomDropdown
              options={dropdownOptions}
              setSelected={setOptionType}
              defaultSelected={
                dropdownOptions[
                  dropdownOptions.findIndex(
                    (d) => d.text === question.optionType
                  )
                ]
              }
            />
          </div>
          <div className="w-full">
            <OptionCard
              options={question.options}
              type={question.optionType}
              setOptions={setOptions}
            />
          </div>
          <div className="p-3 w-full border-t-2 border-hoverGrey mt-5 flex items-center justify-end text-fontGrey text-xl">
            <Icon
              icon={faClone}
              label="Duplicate"
              onClick={handleDuplicateQuestion}
            />
            <Icon
              onClick={() => deleteQuestion(question.id)}
              icon={faTrashAlt}
              label="Delete Question"
            />
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
    </div>
  );
};

QuestionCard.defaultProps = {
  question: createQuestion(0),
  selected: false,
};
QuestionCard.propTypes = {
  question: PropTypes.object,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default QuestionCard;
