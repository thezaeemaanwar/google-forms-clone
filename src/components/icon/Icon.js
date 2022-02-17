import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

const Icon = ({ label, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      title={label}
      className="hover:bg-hoverGrey hover:cursor-pointer h-12 w-12 rounded-full flex items-center justify-center"
    >
      <FontAwesomeIcon className="text-xl" icon={icon} />
    </div>
  );
};

Icon.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  label: "icon",
};
export default Icon;
