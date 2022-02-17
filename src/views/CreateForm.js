import ThemeEditor from "components/Theme/ThemeEditor";
import FormHeader from "components/layout/Headers/FormHeader";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getForm } from "services/firebase/firebase.firestore";
import { setForm, setLoading } from "store/data/form.slice";
import Loading from "components/Loaders/page_loader";

const CreateForm = () => {
  const { type } = useParams();
  const { theme, title } = useSelector((state) => state.form);
  const [themeEditorVisibility, setThemeEditorVisibility] = useState(false);
  const toggleThemeEditor = () => {
    setThemeEditorVisibility(!themeEditorVisibility);
  };

  const { user } = useSelector((state) => state.authentication);
  const { loading } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type !== "blank") {
      const dispatchCallback = (formData) => {
        dispatch(setForm(formData.form));
      };
      dispatch(setLoading(true));
      getForm(user.uid, type, dispatchCallback);
    }
  }, [user.uid, type, dispatch]);
  if (loading) return <Loading />;
  else
    return (
      <div>
        <FormHeader
          id={type}
          title={title}
          toggleThemeEditor={toggleThemeEditor}
        />
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
};

export default CreateForm;
