import generateKey from "components/Helpers/generateKey";

const createOption = (pre) => {
  const option = { id: generateKey("option" + pre), text: "Option" };
  return option;
};

export default createOption;
