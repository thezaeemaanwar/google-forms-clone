import { setColor } from "store/data/form.slice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ColorComponent = ({ selected, color }) => {
  console.log("color: ", color, "  slected: ", selected);
  const dispatch = useDispatch();
  const selectColor = () => {
    dispatch(setColor({ color }));
  };
  return (
    <div
      onClick={selectColor}
      className={`cursor-pointer ${
        selected ? "h-8 w-8" : "h-7 w-7"
      } rounded-full ${color}-bg  flex items-center justify-center`}
    >
      {selected ? (
        <FontAwesomeIcon className="text-white" icon={faCheck} />
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
