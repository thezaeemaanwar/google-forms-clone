import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPalette, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "components/Icon/Icon";
import { useSelector } from "react-redux";
import { colors, fonts } from "data/Theme/ThemeOptions";
import ColorComponent from "components/Theme/ColorComponent";
import BackgroundColorComponent from "components/Theme/BackgroundColorComponent";
import { useDispatch } from "react-redux";
import { setBackgroundOpacity, setColor, setFont } from "store/data/form.slice";
import PropTypes from "prop-types";
import CustomDropdown from "components/Dropdown/CustomDropdown";

const ThemeEditor = ({ toggleThemeEditor }) => {
  const { theme } = useSelector((state) => state.form);

  const dispatch = useDispatch();
  const selectColor = (color) => {
    dispatch(setColor({ color }));
  };
  const setBGOpacity = (opacity) => {
    dispatch(setBackgroundOpacity({ opacity }));
  };
  const setFormFont = (font) => {
    dispatch(setFont({ font: font.text }));
  };
  return (
    <div className="fixed right-0 top-28 bg-white h-screen w-80 flex flex-col shadow-xl">
      <div className="flex items-center justify-between py-2 pl-4 shadow-md">
        <div className="flex items-center">
          <FontAwesomeIcon
            className={`${theme.color}-text mr-3 text-xl`}
            icon={faPalette}
          />
          <div className="text-black text-base">Theme Options</div>
        </div>
        <Icon icon={faTimes} onClick={toggleThemeEditor} />
      </div>
      <div className="flex flex-col items-start p-6 shadow">
        <div className="text-xs py-2">HEADER</div>
        <label
          htmlFor="upload-header"
          className="cursor-pointer border rounded p-2 px-4 text-blue"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faImage} />
            <div className="pl-2">Choose Image</div>
          </div>
          <input
            name="upload-header"
            id="upload-header"
            hidden
            type="file"
            accept="image/*"
          />
        </label>
      </div>
      <div className="flex flex-col items-start p-6 shadow">
        <div className="text-xs py-2">THEME COLOR</div>
        <div className="grid grid-rows-2 grid-cols-6 gap-2 justify-center items-center">
          {colors.map((color) => (
            <ColorComponent
              key={color}
              selected={theme.color === color}
              color={color}
              selectColor={() => selectColor(color)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start p-6 shadow">
        <div className="text-xs py-2">BACKGROUND COLOR</div>
        <BackgroundColorComponent
          color={theme.color}
          opacity={theme.backgroundOpacity}
          setOpacity={setBGOpacity}
        />
      </div>
      <div className="flex flex-col items-start p-6 shadow">
        <div className="text-xs py-2">FONT STYLE</div>
        <div>
          <CustomDropdown
            options={fonts}
            setSelected={setFormFont}
            defaultSelected={{ text: theme.font }}
            type="font"
          />
        </div>
      </div>
    </div>
  );
};

ThemeEditor.propTypes = {
  toggleThemeEditor: PropTypes.func.isRequired,
};

export default ThemeEditor;
