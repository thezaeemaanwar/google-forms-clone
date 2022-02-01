import {
  faCaretDown,
  faCaretUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CustomDropdown = ({ options, setSelected, defaultSelected }) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultSelected ? defaultSelected : options[0]
  );
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdownOptions = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSelectOption = (op, idx) => {
    setSelectedOption(op);
    setSelected(op);
    toggleDropdownOptions();
  };

  return (
    <div className="text-fontGrey">
      <div
        onClick={toggleDropdownOptions}
        className="flex items-center justify-between px-4 py-3 hover:cursor-pointer hover:bg-grey m-2 border border-hoverGrey rounded w-56 "
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={selectedOption.icon} />

          <div className="px-2">{selectedOption.text}</div>
        </div>
        {openDropdown ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      {openDropdown ? (
        <ul className="py-2 rounded-sm drop-shadow fixed top-32 bg-white w-56">
          {options.map((op, idx) => (
            <li
              className="p-3 hover:bg-hoverGrey hover:cursor-pointer flex items-center"
              onClick={() => {
                handleSelectOption(op, idx);
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
export default CustomDropdown;
