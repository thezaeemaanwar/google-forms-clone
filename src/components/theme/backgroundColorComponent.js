import { opacities } from "data/theme/themeOptions";
import ColorComponent from "components/theme/colorComponent";

const BackgroundColorComponent = ({ color, opacity, setOpacity }) => {
  return (
    <div className="grid grid-cols-6 w-full items-center">
      {opacities.map((op) => (
        <ColorComponent
          key={op}
          selectColor={() => setOpacity(op)}
          color={`${color + op}`}
          selected={opacity === op}
          border={op === 0 || op === 10}
        />
      ))}
    </div>
  );
};

export default BackgroundColorComponent;
