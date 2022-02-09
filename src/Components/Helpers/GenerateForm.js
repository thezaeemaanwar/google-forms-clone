const generateFormPreview = (id, title, img, date, shared) => {
  return { id, title, img, date, shared };
};

const generateForm = (id, theme, title, description, questions) => {
  return { id, theme, title, description, questions };
};
export { generateForm, generateFormPreview };
