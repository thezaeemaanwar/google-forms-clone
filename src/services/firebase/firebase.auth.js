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

const SignOut = () => {};

export { SignIn, SignOut };
