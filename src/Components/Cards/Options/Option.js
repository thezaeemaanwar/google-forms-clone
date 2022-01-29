import PropTypes from "prop-types";
import IndividualOption from "./IndividualOption";

const OptionCard = ({ type, options, setOptions }) => {
  if (type === "Short answer" || type === "Paragraph") return <div></div>;
  else
    return (
      <div>
        {options.map((option) => (
          <IndividualOption key={option.id} type={type} option={option} />
        ))}
      </div>
    );
};

OptionCard.defaultProps = {
  type: "Multiple choice",
  options: [],
};
OptionCard.propTypes = {
  type: PropTypes.string,
  options: PropTypes.array,
  setOptions: PropTypes.func,
};
export default OptionCard;
