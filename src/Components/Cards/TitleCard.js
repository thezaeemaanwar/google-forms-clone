import { PROGRESS_SAVING } from "data/statusMessages";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormDescriptionInDB,
  setFormTitleInDB,
} from "services/firebase/firebase.firestore";
import { setTitle, setDescription, setSaved } from "store/data/form.slice";

const TitleCard = ({ selected }) => {
  const dispatch = useDispatch();
  const { id, theme, title, description } = useSelector((state) => state.form);

  const [formTitle, setFormTitle] = useState(title);
  const [formDescription, setFormDescription] = useState(description);

  const savedCallBack = (msg) => {
    dispatch(setSaved(msg));
  };

  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setFormDescription(e.target.value);
  };

  const saveTitle = (e) => {
    savedCallBack(PROGRESS_SAVING);
    setTitle(formTitle);
    setFormTitleInDB(id, formTitle, savedCallBack);
  };
  const saveDescription = (e) => {
    setDescription(formDescription);
    savedCallBack(PROGRESS_SAVING);
    setFormDescriptionInDB(id, formDescription, savedCallBack);
  };

  return (
    <div
      className={`w-full rounded-lg border border-hoverGrey bg-white my-3  ${
        selected ? "selectedCard" : ""
      } `}
    >
      <div className={`h-3 ${theme.color}-bg rounded-t-lg`}></div>
      <div className="p-6 ">
        <input
          type="text"
          className={`text-3xl w-full border-b border-hoverGrey focus:border-b-2 ${theme.color}TextField ${theme.font}-text focus:outline-none py-2`}
          value={formTitle}
          onChange={(e) => {
            handleTitleChange(e);
          }}
          onBlur={saveTitle}
        />
        <input
          type="text"
          className={`text-base w-full border-b border-hoverGrey focus:border-b-2 ${theme.color}TextField focus:outline-none py-1 pt-3`}
          placeholder="Form Description"
          value={formDescription}
          onChange={(e) => {
            handleDescriptionChange(e);
          }}
          onBlur={saveDescription}
        />
      </div>
    </div>
  );
};

TitleCard.defaultProps = {
  title: "Untitled Form",
  description: "",
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
