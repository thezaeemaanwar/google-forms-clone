import * as Yup from "yup";

const headerSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

const questionSchema = Yup.object().shape({
  title: Yup.string().required("Question title is required"),
});

export { questionSchema, headerSchema };
