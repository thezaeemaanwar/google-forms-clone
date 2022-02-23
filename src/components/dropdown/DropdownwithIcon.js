import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import useOutsideAlert from "components/dropdown/useOutsideAlert";
import PropTypes from "prop-types";

const DropdownWithIcon = ({
  options,
  renameEvent,
  removeEvent,
  openInNewTab,
}) => {
  const dropDownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdownOptions = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleSelectOption = (op) => {
    toggleDropdownOptions();
    if (op === "Rename") renameEvent();
    else if (op === "Remove") removeEvent();
    else openInNewTab();
  };
  const actionCallback = () => {
    setOpenDropdown(false);
  };
  useOutsideAlert(dropDownRef, actionCallback);
  return (
    <div className="text-fontGrey">
      <div
        onClick={toggleDropdownOptions}
        className="flex items-center justify-center px-2 py-1 hover:cursor-pointer m-2"
      >
        <div className="px-2 hover:cursor-pointer w-9 h-9 rounded-full hover:bg-hoverGrey flex items-center justify-center">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
      {openDropdown ? (
        <ul
          className="py-1 rounded-sm drop-shadow absolute bg-white"
          ref={dropDownRef}
        >
          {options.map((op) => (
            <li
              key={op.id}
              className="p-3 hover:bg-hoverGrey hover:cursor-pointer text-fontGrey flex items-center"
              onClick={() => {
                handleSelectOption(op.text);
              }}
            >
              {op.icon ? (
                <FontAwesomeIcon icon={op.icon} />
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

DropdownWithIcon.propTypes = {
  options: PropTypes.array,
  renameEvent: PropTypes.func,
  removeEvent: PropTypes.func,
  openInNewTab: PropTypes.func.isRequired,
};

export default DropdownWithIcon;
