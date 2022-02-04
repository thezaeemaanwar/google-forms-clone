import FormHeader from "components/layout/Headers/FormHeader";
import { useParams, Outlet } from "react-router-dom";

const CreateForm = () => {
  const { type } = useParams();
  if (type === "blank")
    return (
      <div>
        <FormHeader />
        <Outlet />
      </div>
    );
  else return <div>Template</div>;
};

export default CreateForm;
