import { db } from "services/firebase/firebase.config";
import {
  collection,
  onSnapshot,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  generateForm,
  generateFormPreview,
} from "components/Helpers/GenerateForm";

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

export { getForm, getFormsFromFirebase };
