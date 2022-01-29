import PropTypes from "prop-types";
import { useState } from "react";

const IndividualOption = ({ type, option }) => {
  const [iOption, setIOption] = useState(option.text);
  const handleInputChange = (e) => {
    setIOption(e.target.value);
  };
  return (
    <div className="my-2 py-2 flex items-center">
      <input
        className="text-2xl"
        disabled
        type={
          type === "Multiple choice"
            ? "radio"
            : type === "Checkboxes"
            ? "checkbox"
            : "text"
        }
      />
      <input
        className="w-2/3 p-3 border-b focus:outline-none textField focus:border-b-2"
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
  type: "Multiple choice",
};

export default IndividualOption;
