import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ColorComponent = ({ selected, color, selectColor, border }) => {
  return (
    <div
      // onClick={() => selectColor(color)}
      onClick={selectColor}
      className={`cursor-pointer ${
        selected ? "h-8 w-8" : "h-7 w-7"
      } rounded-full ${color}-bg  flex items-center justify-center ${
        border ? "border" : null
      } hover:shadow-lg hover:w-8 hover:h-8`}
    >
      {selected ? (
        <FontAwesomeIcon
          className={`${
            color.includes(10) ||
            color.includes(20) ||
            color.includes(30) ||
            color.includes(0)
              ? "text-fontGrey"
              : "text-white"
          }`}
          icon={faCheck}
        />
      ) : null}
    </div>
  );
};

ColorComponent.defaultProps = {
  selected: false,
};
ColorComponent.propTypes = {
  selected: PropTypes.bool,
  color: PropTypes.string.isRequired,
};

export default ColorComponent;
