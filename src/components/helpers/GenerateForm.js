const generateFormPreview = (id, title, img, date, shared) => {
  return { id, title, img: img ? img : "", date, shared };
};

const generateForm = (
  id,
  theme,
  title,
  description,
  questions,
  date,
  shared
) => {
  return { id, theme, title, description, questions, date, shared };
};

export { generateForm, generateFormPreview };
