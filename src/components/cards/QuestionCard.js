import PropTypes from "prop-types";
import CustomDropdown from "components/dropdown/CustomDropdown";
import OptionCard from "components/cards/options/Option";
import { dropdownOptions } from "data/optionTypes";
import DisplayOptions from "components/cards/options/DisplayOptions";
import { faClone, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Slider from "components/slider/slider";
import { useDispatch, useSelector } from "react-redux";
import {
  faEllipsisV,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "components/icon/Icon";
import {
  setQuestion,
  removeQuestion,
  duplicateQuestion,
  setSaved,
} from "store/data/form.slice";
import createQuestion from "components/helpers/createQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  removeQuestionFromDB,
  setQuestionsInDB,
} from "services/firebase/firestore.firebase";
import { PROGRESS_SAVING, SUCCESS_SAVED } from "data/statusMessages";
import { useFormik } from "formik";
import { questionSchema as validationSchema } from "components/helpers/validations";

const QuestionCard = ({ question, selected, onClick }) => {
  const { id, theme, questions } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const { handleChange, values, errors } = useFormik({
    initialValues: { title: question.title },
    validationSchema,
  });

  const setOptionType = (opType) => {
    const temp = { ...question };
    temp.optionType = opType;
    dispatch(setQuestion({ id: question.id, question: temp }));
  };

  const savedCallBack = (status) => {
    if (status.error) dispatch(setSaved("Error Saving data in Drive"));
    dispatch(setSaved(SUCCESS_SAVED));
  };

  const setOptions = (options) => {
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
    const tempQ = [...questions];
    const ind = tempQ.findIndex((x) => x.id === question.id);
    tempQ[ind] = question;
    setQuestionsInDB(id, tempQ, savedCallBack);
  };

  const deleteQuestion = (qid) => {
    dispatch(setSaved(PROGRESS_SAVING));
    dispatch(removeQuestion({ id: qid }));
    removeQuestionFromDB(id, question, savedCallBack);
  };

  const handleDuplicateQuestion = (id) => {
    dispatch(duplicateQuestion({ id: question.id, question }));
    dispatch(setSaved(PROGRESS_SAVING));
    setQuestionsInDB(id, questions, savedCallBack);
  };

  const saveTitle = () => {
    const ques = { ...question };
    ques.title = values.title;
    if (!errors.title) {
      dispatch(setQuestion({ id: ques.id, question: ques }));
      dispatch(setSaved(PROGRESS_SAVING));
      setQuestionsInDB(id, questions, savedCallBack);
    }
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
              name="title"
              className={`w-2/3 p-3 bg-grey border-hoverGrey border-b focus:outline-none ${theme.color}TextField ${theme.font}-text focus:border-b-2`}
              placeholder="Question"
              value={values.title}
              onChange={handleChange}
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
          <p className="text-red text-xs py-1">
            {errors.title ? errors.title : null}
          </p>
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
