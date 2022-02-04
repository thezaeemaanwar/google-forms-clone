import ThemeEditor from "components/Theme/ThemeEditor";
import FormHeader from "components/layout/Headers/FormHeader";
import { useSelector } from "react-redux";
import { useParams, Outlet } from "react-router-dom";

const CreateForm = () => {
  const { type } = useParams();
  const { theme } = useSelector((state) => state.form);
  if (type === "blank")
    return (
      <div>
        <FormHeader />
        <div className={`w-full min-h-screen ${theme.color}-bg-10 mt-28`}>
          <Outlet />
        </div>
        <ThemeEditor />
      </div>
    );
  else return <div>Template</div>;
};

export default CreateForm;
