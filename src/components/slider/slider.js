import "components/slider/slider.css";
import { PropTypes } from "prop-types";

const Slider = ({ theme, required, toggleRequired }) => {
  return (
    <label className="switch w-14 h-7 flex items-center">
      <input
        defaultChecked={required}
        type="checkbox"
        onChange={toggleRequired}
      />
      <span className={`slider ${theme.color}-slider`}></span>
    </label>
  );
};

Slider.propTypes = {
  toggleRequired: PropTypes.func.isRequired,
};

export default Slider;
