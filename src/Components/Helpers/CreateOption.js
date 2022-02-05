import generateKey from "components/Helpers/GenerateKey";

const createOption = (pre) => {
  const option = { id: generateKey("option" + pre), text: "Option" };
  return option;
};

export default createOption;
