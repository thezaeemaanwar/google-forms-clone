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
} from "firebase/firestore";
import {
  generateForm,
  generateFormPreview,
} from "components/Helpers/GenerateForm";

const getFormsFromFirebase = async (uid, dispatchCallback, loadDispatch) => {
  try {
    const q = query(collection(db, "forms"), where("uid", "==", uid));
    const qSnapshot = await getDocs(q);
    const formsData = [];
    qSnapshot.forEach((form) => {
      console.log("For each");
      console.log(form.id, "=>", form.data());
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

const getForm = async (formId, dispatchCallback) => {
  console.log(formId);
  try {
    const docSnap = await getDoc(doc(db, "forms", formId));
    const data = docSnap.data();
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
  } catch (e) {
    console.error(e);
  }
};

const addQuestionInDB = async (uid, formId, questions) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, {
      questions: questions,
    });
  } catch (e) {
    console.error(e);
  }
};

const removeQuestionInDB = async (uid, formId, question) => {
  try {
    const docRef = doc(db, "users", uid, "formsCreated", formId);
    await updateDoc(docRef, {
      questions: arrayRemove(question),
    });
  } catch (e) {
    console.error(e);
  }
};

const addFormInDB = async (uid, form) => {
  form.uid = uid;
  console.log(uid, form);
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
};
