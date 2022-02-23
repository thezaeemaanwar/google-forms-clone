import generateKey from "components/helpers/generateKey";

const createOption = (pre) => {
  const option = { id: generateKey("option" + pre), text: "Option" };
  return option;
};

export default createOption;
