import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toolBarActions } from "data/Templates";
import PropTypes from "prop-types";

const ToolBar = ({ top, addQuestion }) => {
  return (
    <div
      className={`w-12 h-60 py-3 bg-white rounded fixed ${top} right-80 flex flex-col items-center justify-between text-fontGrey border border-hoverGrey shadow-md`}
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

ToolBar.defaultProps = {
  top: "top-32",
};
ToolBar.propTypes = {
  top: PropTypes.string,
  addQuestion: PropTypes.func,
};

export default ToolBar;
