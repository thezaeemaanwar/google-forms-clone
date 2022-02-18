import FilledButton from "components/buttons/FilledButton";
import OutLinedButton from "components/buttons/OutLinedButton";
import { useFormik } from "formik";
import PropTypes from "prop-types";

const RenameModal = ({ closeModal, renameCallBack }) => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { name: "" },
    onSubmit: (values) => {
      renameCallBack(values.name);
    },
  });
  return (
    <div className="w-screen h-screen fixed bg-black/10 flex items-center justify-center top-0 left-0">
      <form
        className="w-1/4 bg-white rounded-md shadow-lg items-center justify-center p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-black m-1">Rename</h2>
        <p className="m-1">Please enter a new name for the item</p>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="rounded p-1 border border-hoverGrey focus:outline-1 outline-purple my-3 w-full"
        />
        <div className="flex items-end justify-end">
          <OutLinedButton
            color="text-purple"
            text="Cancel"
            onClick={closeModal}
          />
          <FilledButton
            color="text-white"
            background="bg-blue"
            text="OK"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

RenameModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    renameCallBack: PropTypes.func.isRequired
};

export default RenameModal;
