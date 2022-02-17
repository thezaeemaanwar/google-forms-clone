import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toolBarActions } from "data/templates";
import PropTypes from "prop-types";

const ToolBar = ({ addQuestion }) => {
  return (
    <div
      className={`h-12 w-11/12 px-3 sm:w-12 sm:h-60 sm:py-3 sm:sticky sm:top-32 bg-white rounded m-3 flex flex-row justify-between sm:flex-col items-center text-fontGrey border border-hoverGrey shadow-md`}
    >
      {toolBarActions.map((action) => (
        <div key={action.id} title={action.label}>
          <FontAwesomeIcon
            icon={action.icon}
            className="cursor-pointer text-lg"
            onClick={addQuestion ? addQuestion : () => {}}
          />
        </div>
      ))}
    </div>
  );
};

ToolBar.propTypes = {
  addQuestion: PropTypes.func.isRequired,
};

export default ToolBar;
