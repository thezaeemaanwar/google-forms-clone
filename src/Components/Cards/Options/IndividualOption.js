import PropTypes from "prop-types";
import { useState } from "react";
import { CHECKBOX, MULTIPLE_CHOICE } from "data/OptionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const IndividualOption = ({ type, option, deleteOption }) => {
  const [iOption, setIOption] = useState(option.text);

  const handleInputChange = (e) => {
    setIOption(e.target.value);
  };

  return (
    <div className="my-2 py-2 flex items-center justify-between">
      <div className="w-full flex items-center ">
        <input
          className="ml-1"
          disabled
          type={
            type === MULTIPLE_CHOICE
              ? "radio"
              : type === CHECKBOX
              ? "checkbox"
              : "text"
          }
        />
        <input
          className="w-4/5 p-1 pl-0 ml-3 border-b focus:outline-none textField focus:border-b-2"
          placeholder="Option"
          value={iOption}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <FontAwesomeIcon
        onClick={() => deleteOption(option.id)}
        className="text-fontGrey hover:cursor-pointer"
        icon={faTimes}
      />
    </div>
  );
};

IndividualOption.propTypes = {
  type: PropTypes.string,
  option: PropTypes.object,
  deleteOption: PropTypes.func,
};

IndividualOption.defaultProps = {
  option: { id: undefined, text: "option" },
  type: MULTIPLE_CHOICE,
};

export default IndividualOption;
