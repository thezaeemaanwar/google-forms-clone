import {
  faTextHeight,
  faTrashAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import slogo from "assets/logo2.svg";
import DropdownWithIcon from "components/dropdown/DropdownwithIcon";
import { LIST } from "data/viewTypes";
import PropTypes from "prop-types";

const FormTile = ({ formData, gridView }) => {
  const actions = [
    { icon: faTextHeight, text: "Rename" },
    { icon: faTrashAlt, text: "Remove" },
    { icon: faExternalLinkAlt, text: "Open in new tab" },
  ];
  if (!gridView)
    return (
      <div className="w-full rounded-full hover:bg-purple/20 flex justify-between items-center px-3 pl-6">
        <div className="w-1/2 flex justify-start items-center">
          <div>
            <img src={slogo} alt="form" />
          </div>
          <div className="ml-2">{formData.title}</div>
        </div>
        <div>{formData.date}</div>
        {/* <div></div> */}
        <DropdownWithIcon options={actions} />
      </div>
    );
  else
    return (
      <div className="w-56 h-60 mr-5 mb-5 border border-hoverGrey hover:border-purple rounded-md">
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
            <DropdownWithIcon options={actions} />
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
};

export default FormTile;