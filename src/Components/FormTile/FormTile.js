import {
  faEllipsisV,
  faTextHeight,
  faTrashAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slogo from "Assets/logo2.svg";
import Dropdown from "Components/CustomDropdown/Dropdown";
import DropdownWithIcon from "Components/CustomDropdown/DropdownwithIcon";
import { useState } from "react";

const FormTile = ({ formData }) => {
  const actions = [
    { icon: faTextHeight, text: "Rename" },
    { icon: faTrashAlt, text: "Remove" },
    { icon: faExternalLinkAlt, text: "Open in new tab" },
  ];
  return (
    <div className="w-52 h-60 mr-5 mb-5 border border-hoverGrey hover:border-purple rounded-md">
      <div className="h-2/3">
        <img src={formData.img} alt={formData.title} />
      </div>
      <div className="h-1/3 py-4 pr-2 pl-4 flex flex-col">
        <div className="text-black">{formData.title}</div>
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <img src={slogo} alt="Logo" />
            {formData.lastAction === "modified" ? (
              <div className="text-xs font-semibold opacity-80">Modified </div>
            ) : null}
            <div className="text-xs font-semibold opacity-80">
              {formData.date}
            </div>
          </div>
          <DropdownWithIcon />
        </div>
      </div>
    </div>
  );
};

export default FormTile;
