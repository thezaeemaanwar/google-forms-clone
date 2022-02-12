import { db } from "services/firebase/firebase.config";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import {
  generateForm,
  generateFormPreview,
} from "components/Helpers/GenerateForm";

const createUserInDB = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  if (userDoc.exists()) {
    console.log("user exists");
  } else {
    console.log("User doesn't exist");
    await setDoc(doc(db, "users", uid), {});
    console.log("user set");
  }
};

const getFormsFromFirebase = async (uid, dispatchCallback, loadDispatch) => {
  const qSnapshot = await getDocs(collection(db, "users", uid, "formsCreated"));
  const formsData = [];
  qSnapshot.forEach((form) => {
    formsData.push(
      generateFormPreview(
        form.id,
        form.data().title,
        form.data().img,
        form.data().date,
        form.data().shared
      )
    );
  });
  console.log("dispatching....");
  dispatchCallback(formsData);
  loadDispatch();
};

const getForm = async (uid, formId, dispatchCallback) => {
  const docRef = doc(db, "users", uid, "formsCreated", formId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  if (docSnap.exists())
    dispatchCallback({
      form: generateForm(data.id, data.title, data.description),
    });
  else console.error("No such form exists");
};

export { getForm, getFormsFromFirebase, createUserInDB };
