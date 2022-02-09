import { db } from "services/firebase/firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";

const getFormsFromFirebase = async (uid) => {
  const snapshot = await collection(db, "users").get();
  snapshot.forEach((ss) => console.log(ss.id, "=>", ss.data()));
};

export { getFormsFromFirebase };
