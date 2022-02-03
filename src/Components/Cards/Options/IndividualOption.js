import PropTypes from "prop-types";
import { useState } from "react";
import { CHECKBOX, MULTIPLE_CHOICE } from "data/OptionTypes";

const IndividualOption = ({ type, option }) => {
  const [iOption, setIOption] = useState(option.text);

  const handleInputChange = (e) => {
    setIOption(e.target.value);
  };

  return (
    <div className="my-2 py-2 flex items-center">
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
  );
};

IndividualOption.propTypes = {
  type: PropTypes.string,
  option: PropTypes.object,
};

IndividualOption.defaultProps = {
  option: { id: undefined, text: "option" },
  type: MULTIPLE_CHOICE,
};

export default IndividualOption;
