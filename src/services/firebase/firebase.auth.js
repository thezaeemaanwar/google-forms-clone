import firebase_app from "services/firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "store/authentication/authentication.slice";

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(login(user));
    } else {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider)
        .then((re) => {
          dispatch(login(re.user));
        })
        .catch((err) => {
          dispatch(login(err));
        });
    }
  });
};

const IsSignedIn = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  });
};
const SignOut = () => {};

export { SignIn, SignOut, IsSignedIn };
