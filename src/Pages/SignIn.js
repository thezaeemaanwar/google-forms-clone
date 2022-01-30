import firebase_app from "MyFirebase/firebase";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// import { SignInEvent } from "Store/Actions/actions";
import { SignInEvent } from "Store/Actions/actions";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
    .then((re) => {
      dispatch(SignInEvent(re.user));
      console.log("DONE");
    })
    .catch((err) => {
      console.error(err);
    });
};

export default SignIn;
