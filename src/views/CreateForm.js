import { useParams } from "react-router-dom";

const CreateForm = (props) => {
  const { type } = useParams();
  return <div>create Form {type}</div>;
};

export default CreateForm;
