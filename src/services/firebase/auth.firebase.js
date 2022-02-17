import firebase_app from "services/firebase/config.firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth";

const SignIn = (dispatchCallback) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
    .then((re) => {
      dispatchCallback({ user: re.user });
    })
    .catch((err) => {
      dispatchCallback({ error: err });
    });
};

const checkLogged = (dispatchCallback) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatchCallback({
        uid: user.uid,
        displayName: user.displayName,
        profileImage: user.photoURL,
      });
    } else {
      dispatchCallback(null);
    }
  });
};

const SignOut = (dispatchCallback) => {
  const auth = getAuth();
  firebaseSignOut(auth);
  dispatchCallback(null);
};

export { SignIn, SignOut, checkLogged };
