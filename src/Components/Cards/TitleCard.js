import PropTypes from "prop-types";
import { useState } from "react";

const TitleCard = ({
  title,
  description,
  setTitle,
  setDescription,
  color,
  selected,
}) => {
  const [formTitle, setFormTitle] = useState(title);
  const [formDescription, setFormDescription] = useState("");

  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setFormDescription(e.target.value);
  };

  return (
    <div
      className={`w-full rounded-lg border border-hoverGrey bg-white my-3  ${
        selected ? "selectedCard" : ""
      } `}
    >
      <div className={`h-3 ${color}-bg rounded-t-lg`}></div>
      <div className="p-6 ">
        <input
          type="text"
          className={`text-3xl w-full border-b border-hoverGrey focus:border-b-2 textField focus:outline-none py-2`}
          value={formTitle}
          onChange={(e) => {
            handleTitleChange(e);
          }}
        />
        <input
          type="text"
          className={`text-base w-full border-b border-hoverGrey focus:border-b-2 textField focus:outline-none py-1 pt-3`}
          placeholder="Form Description"
          value={formDescription}
          onChange={(e) => {
            handleDescriptionChange(e);
          }}
        />
      </div>
    </div>
  );
};

TitleCard.defaultProps = {
  title: "Untitled Form",
  description: "Form description",
  color: "purple",
  selected: true,
};

TitleCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  setTitle: PropTypes.func,
  setDescription: PropTypes.func,
};

export default TitleCard;
