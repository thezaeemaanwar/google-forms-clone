import {
  faCaretDown,
  faCaretUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Dropdown = ({ options, setSelected, defaultSelected }) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultSelected ? defaultSelected : options[0].text
  );
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdownOptions = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSelectOption = (op) => {
    setSelectedOption(op);
    setSelected(op);
    toggleDropdownOptions();
  };
  return (
    <div>
      <div
        onClick={toggleDropdownOptions}
        className="flex items-center justify-center px-2 py-1 hover:cursor-pointer hover:bg-grey m-2"
      >
        <div className="px-2">{selectedOption}</div>
        {openDropdown ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      {openDropdown ? (
        <ul className="py-1 rounded-sm drop-shadow fixed bg-white">
          {options.map((op) => (
            <li
              className="p-3 hover:bg-hoverGrey hover:cursor-pointer text-black flex items-center"
              onClick={() => {
                handleSelectOption(op.text);
              }}
            >
              {op.icon ? (
                <FontAwesomeIcon icon={op.icon} />
              ) : op.text === selectedOption ? (
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
export default Dropdown;
