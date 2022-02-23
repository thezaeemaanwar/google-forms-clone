import {
  faTextHeight,
  faTrashAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import slogo from "assets/logo2.svg";
import DropdownWithIcon from "components/dropdown/DropdownwithIcon";
import openInNewTab from "components/helpers/openInNewTab";
import { LIST } from "data/viewTypes";
import PropTypes from "prop-types";
import { deleteFormFromDB } from "services/firebase/firestore.firebase";
import RenameModal from "components/modals/RenameModal";
import { useState } from "react";

const FormTile = ({ formData, gridView, onClick, removeForm, renameForm }) => {
  const [renameModalVisibility, setRenameModalVisibility] = useState(false);
  const actions = [
    { id: 1, icon: faTextHeight, text: "Rename" },
    { id: 2, icon: faTrashAlt, text: "Remove" },
    { id: 3, icon: faExternalLinkAlt, text: "Open in new tab" },
  ];
  const renameCallBack = (name) => {
    renameForm(formData.id, name);
  };
  const toggleRenameModal = () => {
    setRenameModalVisibility(!renameModalVisibility);
  };
  const removeEvent = () => {
    deleteFormFromDB(formData.id);
    removeForm(formData.id);
  };
  const openLinkInNewTab = () => {
    openInNewTab(`/create/${formData.id}/edit`);
  };

  if (gridView)
    return (
      <li className="w-full rounded-full cursor-pointer hover:bg-purple/10 flex justify-between items-center px-3 pl-6">
        <div onClick={onClick} className="w-3/4">
          <div className="w-1/2 flex justify-start items-center">
            <div>
              <img src={slogo} alt="form" />
            </div>
            <div className="ml-2">{formData.title}</div>
          </div>
        </div>
        <div>{formData.date}</div>
        <DropdownWithIcon
          options={actions}
          renameEvent={toggleRenameModal}
          removeEvent={removeEvent}
          openInNewTab={openLinkInNewTab}
        />
        {renameModalVisibility && (
          <RenameModal
            closeModal={toggleRenameModal}
            renameCallBack={renameCallBack}
          />
        )}
      </li>
    );
  else
    return (
      <div
        onClick={onClick}
        className="w-56 h-60 mr-5 mb-5 border cursor-pointer border-hoverGrey hover:border-purple rounded-md"
      >
        <div className="h-2/3">
          <img src={formData.img} alt={formData.title} />
        </div>
        <div className="h-1/3 py-4 pr-2 pl-4 flex flex-col">
          <div className="text-black">{formData.title}</div>
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <img src={slogo} alt="Logo" />
              {formData.lastAction === "modified" ? (
                <div className="text-xs font-semibold opacity-80">
                  Modified{" "}
                </div>
              ) : null}
              <div className="text-xs font-semibold opacity-80">
                {formData.date}
              </div>
            </div>
            <DropdownWithIcon
              options={actions}
              renameEvent={toggleRenameModal}
              removeEvent={removeEvent}
            />
          </div>
        </div>
      </div>
    );
};

FormTile.defaultProps = {
  type: LIST,
};
FormTile.propTypes = {
  type: PropTypes.string,
  formData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormTile;
