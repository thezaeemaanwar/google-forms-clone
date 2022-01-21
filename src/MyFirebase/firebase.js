import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuG_7L3iWr4iMJNDvdeyOs1Bu1smx7nzI",
  authDomain: "forms-clone-89516.firebaseapp.com",
  projectId: "forms-clone-89516",
  storageBucket: "forms-clone-89516.appspot.com",
  messagingSenderId: "815339855045",
  appId: "1:815339855045:web:a8067b4d6fd4d0b29924ac",
  measurementId: "G-YQHSF8F2Q5",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export default firebase_app;
