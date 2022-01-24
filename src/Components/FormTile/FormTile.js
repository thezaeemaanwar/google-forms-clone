import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slogo from "Assets/logo2.svg";

const FormTile = ({ formData }) => {
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
          <div className="px-2 hover:cursor-pointer w-9 h-9 rounded-full hover:bg-hoverGrey flex items-center justify-center">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTile;
