import { db } from "services/firebase/config.firebase";
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
  arrayUnion,
} from "firebase/firestore";
import {
  generateForm,
  generateFormPreview,
} from "components/helpers/generateForm";
import {
  ERR_NOT_AUTHORISED,
  ERR_SAVING_FAILED,
  SUCCESS_SAVED,
} from "data/statusMessages";

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
    const docSnap = await getDoc(doc(db, "forms", formId));
    const data = docSnap.data();
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

const addFormInDB = async (uid, form, dispatchCallback) => {
  form.uid = uid;
  try {
    const docRef = await addDoc(collection(db, "forms"), form);
    form.id = docRef.id;
    dispatchCallback(form);
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

const getTemplateFromDB = async (name) => {
  try {
    const docRef = doc(db, "templates", name);
    await getDoc(docRef);
  } catch (e) {
    console.error(e);
  }
};
const addQuestionInDB = async (formId, question, savedCallBack) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, {
      questions: arrayUnion(question),
    });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error(e);
  }
};

const setQuestionsInDB = async (formId, questions, savedCallBack) => {
  try {
    const formRef = doc(db, "forms", formId);
    await updateDoc(formRef, { questions });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error("Set Question Error:", e);
    savedCallBack(ERR_SAVING_FAILED);
  }
};

const removeQuestionFromDB = async (formId, question, savedCallBack) => {
  const qRef = await getDoc(doc(db, "forms", formId));
  var myQ = {};
  qRef.data().questions.forEach((q) => {
    if (q.id === question.id) myQ = q;
  });
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, {
      questions: arrayRemove(myQ),
    });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error("Remove Question Error: ", e);
    savedCallBack(ERR_SAVING_FAILED);
  }
};

const setThemeInDB = async (formId, theme, savedCallBack) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, { theme });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error(e);
    savedCallBack(ERR_SAVING_FAILED);
  }
};

const setSharedInDB = async (formId, shared, savedCallBack) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, { shared });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error(e);
    savedCallBack(ERR_SAVING_FAILED);
  }
};
const setFormTitleInDB = async (formId, title, savedCallBack) => {
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, { title });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error(e);
    savedCallBack(ERR_SAVING_FAILED);
  }
};
const setFormDescriptionInDB = async (formId, description, savedCallBack) => {
  console.log("Setting description");
  try {
    const docRef = doc(db, "forms", formId);
    await updateDoc(docRef, { description });
    savedCallBack(SUCCESS_SAVED);
  } catch (e) {
    console.error(e);
    savedCallBack(ERR_SAVING_FAILED);
  }
};

export {
  getFormsFromFirebase,
  getForm,
  addFormInDB,
  setFormInDB,
  addQuestionInDB,
  setQuestionsInDB,
  removeQuestionFromDB,
  setThemeInDB,
  setSharedInDB,
  setFormTitleInDB,
  setFormDescriptionInDB,
  getTemplateFromDB,
};
