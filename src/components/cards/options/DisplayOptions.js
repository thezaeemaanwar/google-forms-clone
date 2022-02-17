import { CHECKBOX, MULTIPLE_CHOICE } from "data/optionTypes";

const DisplayOptions = ({ type, options }) => {
  if (type === MULTIPLE_CHOICE || type === CHECKBOX)
    return (
      <div>
        {options.map((op) => (
          <div key={op.id} className="flex items-center">
            <input
              className="ml-1"
              disabled
              type={type === MULTIPLE_CHOICE ? "radio" : "checkbox"}
            />
            <div className="p-1  ml-3  focus:outline-none textField focus:border-b-2">
              {op.text}
            </div>
          </div>
        ))}
      </div>
    );
  else return <div></div>;
};

export default DisplayOptions;
