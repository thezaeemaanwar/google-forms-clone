import PropTypes from "prop-types";
import IndividualOption from "components/Cards/Options/IndividualOption";
import { SHORT_ANSWER, PARAGRAPH, MULTIPLE_CHOICE } from "data/OptionTypes";
import generateKey from "components/Helpers/GenerateKey";

const OptionCard = ({ type, options, setOptions }) => {
  const addNewOption = () => {
    const temp = [...options];
    temp.push({ id: generateKey("option" + options.length), text: "Option" });
    setOptions(temp);
  };
  const deleteOption = (opId) => {
    const temp = [...options];
    const ind = temp.findIndex((e) => e.id === opId);
    temp.splice(ind, 1);
    setOptions(temp);
  };

  if (type === SHORT_ANSWER || type === PARAGRAPH)
    return <div>Short Anser</div>;
  else
    return (
      <div>
        {options.map((option) => (
          <IndividualOption
            key={option.id}
            type={type}
            option={option}
            deleteOption={deleteOption}
          />
        ))}
        <div
          className="hover:cursor-pointer text-blue"
          onClick={() => addNewOption()}
        >
          Add Options
        </div>
      </div>
    );
};

OptionCard.defaultProps = {
  type: MULTIPLE_CHOICE,
  options: [],
};
OptionCard.propTypes = {
  type: PropTypes.string,
  options: PropTypes.array,
  setOptions: PropTypes.func,
};
export default OptionCard;
