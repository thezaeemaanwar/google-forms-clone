import {
  faCaretDown,
  faCaretUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from "prop-types";

const CustomDropdown = ({ options, setSelected, defaultSelected, type }) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultSelected ? defaultSelected : options[0]
  );
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdownOptions = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSelectOption = (op) => {
    setSelectedOption(op);
    setSelected(op.text);
    toggleDropdownOptions();
  };

  return (
    <div className="text-fontGrey">
      <div
        onClick={toggleDropdownOptions}
        className="flex items-center justify-between px-4 py-3 hover:cursor-pointer hover:bg-grey m-2 border border-hoverGrey rounded w-56 "
      >
        <div className="flex items-center">
          {selectedOption.icon ? (
            <FontAwesomeIcon icon={selectedOption.icon} />
          ) : null}

          <div
            className={`px-2 capitalize ${
              type === "font" ? selectedOption.text + "-text" : null
            }`}
          >
            {selectedOption.text}
          </div>
        </div>
        {openDropdown ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      {openDropdown ? (
        <ul className="py-2 rounded-sm drop-shadow fixed bottom-16 z-10 bg-white w-56">
          {options.map((op) => (
            <li
              key={op.id}
              className={`p-3 hover:bg-hoverGrey hover:cursor-pointer flex items-center capitalize ${
                type === "font" ? op.text + "-text" : null
              }`}
              onClick={() => {
                handleSelectOption(op);
              }}
            >
              {op.icon ? (
                <FontAwesomeIcon icon={op.icon} />
              ) : op.text === selectedOption.text ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <div className="w-4"></div>
              )}
              <div className="px-2">{op.text}</div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  defaultSelected: PropTypes.object,
  type: PropTypes.string,
};

CustomDropdown.defaultProps = {
  defaultSelected: null,
  type: undefined,
};

export default CustomDropdown;
