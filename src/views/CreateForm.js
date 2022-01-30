import FormHeader from "components/layout/Headers/FormHeader";
import { useParams } from "react-router-dom";

const CreateForm = (props) => {
  const { type } = useParams();
  return (
    <div>
      <FormHeader />
      create Form {type}
    </div>
  );
};

export default CreateForm;
