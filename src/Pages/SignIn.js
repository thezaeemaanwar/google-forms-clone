import firebase_app from "MyFirebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { SignInEvent } from "Store/Actions/actions";
import { SignInEvent, SignOutEvent } from "Store/Actions/actions";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((re) => {
        dispatch(SignInEvent(re.user));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <button
      className="bg-blue text-white p-2 rounded"
      onClick={signInWithGoogle}
    >
      Sign In with Google
    </button>
  );
};

export default SignIn;
