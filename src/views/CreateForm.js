import ThemeEditor from "components/Theme/ThemeEditor";
import FormHeader from "components/layout/Headers/FormHeader";
import { useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { useState } from "react";

const CreateForm = () => {
  const { type } = useParams();
  const { theme } = useSelector((state) => state.form);
  const [themeEditorVisibility, setThemeEditorVisibility] = useState(false);
  const toggleThemeEditor = () => {
    setThemeEditorVisibility(!themeEditorVisibility);
  };
  if (type === "blank")
    return (
      <div>
        <FormHeader toggleThemeEditor={toggleThemeEditor} />
        <div
          className={`w-full min-h-screen ${
            theme.color + theme.backgroundOpacity
          }-bg mt-28`}
        >
          <Outlet />
        </div>
        {themeEditorVisibility ? (
          <ThemeEditor toggleThemeEditor={toggleThemeEditor} />
        ) : null}
      </div>
    );
  else return <div>Template</div>;
};

export default CreateForm;
