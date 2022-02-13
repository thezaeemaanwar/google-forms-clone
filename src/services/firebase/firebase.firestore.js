import { db } from "services/firebase/firebase.config";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  query,
  where,
  arrayRemove,
  Timestamp,
  arrayUnion,
} from "firebase/firestore";
import {
  generateForm,
  generateFormPreview,
} from "components/Helpers/GenerateForm";
import { ERR_NOT_AUTHORISED } from "data/Errors";

const getFormsFromFirebase = async (uid, dispatchCallback, loadDispatch) => {
  try {
    const q = query(collection(db, "forms"), where("uid", "==", uid));
    const qSnapshot = await getDocs(q);
    const formsData = [];
    qSnapshot.forEach((form) => {
      formsData.push(
        generateFormPreview(
          form.id,
          form.data().title,
          form.data().img,
          form.data().date.toDate().toDateString(),
          form.data().shared
        )
      );
    });
    dispatchCallback(formsData);
    loadDispatch();
  } catch (e) {
    console.error(e);
  }
};

const getForm = async (uid, formId, dispatchCallback) => {
  try {
    console.log(uid, formId);
    const docSnap = await getDoc(doc(db, "forms", formId));
    const data = docSnap.data();
    console.log(data);
    if (data.uid !== uid) {
      dispatchCallback({ error: ERR_NOT_AUTHORISED });
    } else {
      if (docSnap.exists())
        dispatchCallback({
          form: generateForm(
            formId,
            data.theme,
            data.title,
            data.description,
            data.questions
          ),
        });
      else console.error("No such form exists");
    }
  } catch (e) {
    console.error(e);
  }
};

const addQuestionInDB = async (formId, question) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, {
      questions: arrayUnion(question),
    });
  } catch (e) {
    console.error(e);
  }
};

const removeQuestionInDB = async (formId, question) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, {
      questions: arrayRemove(question),
    });
  } catch (e) {
    console.error(e);
  }
};

const addFormInDB = async (uid, form) => {
  form.uid = uid;
  try {
    const docRef = await addDoc(collection(db, "forms"), form);
    console.log("Added doc", docRef.id);
  } catch (e) {
    console.error(e);
  }
};

const setFormInDB = async (formId, form) => {
  try {
    const docRef = doc(db, "forms", formId);
    await setDoc(docRef, form);
  } catch (e) {
    console.error(e);
  }
};

export {
  getForm,
  getFormsFromFirebase,
  addQuestionInDB,
  removeQuestionInDB,
  addFormInDB,
  setFormInDB,
};
