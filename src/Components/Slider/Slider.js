import "components/Slider/slider.css";
import { PropTypes } from "prop-types";

const Slider = ({ theme, required, toggleRequired }) => {
  return (
    <label className="switch w-14 h-7 flex items-center">
      <input
        defaultChecked={required}
        // className="opacity-0 w-0 h-0 peer"
        type="checkbox"
        onChange={toggleRequired}
      />
      <span
        className={`slider ${theme.color}-slider`}
        // className={
        //   `top-0 left-0 right-0 bottom-0 ${theme.color}-bg ease-in duration-300 slider cursor-pointer` +
        //   ` rounded-3xl before:rounded-full before:absolute before:content-none before:h-6 before:w-6 before:left-1 ` +
        //   `before:bottom-1 before:${theme.color} before:duration-300`
        // }
      ></span>
    </label>
  );
};

Slider.propTypes = {
  toggleRequired: PropTypes.func.isRequired,
};

export default Slider;
