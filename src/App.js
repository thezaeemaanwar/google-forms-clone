import firebase_app from "MyFirebase/firebase";
import Landing from "Pages/Landing";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignInEvent } from "Store/Actions/actions";
import { Routes, Route } from "react-router-dom";
import CreateForm from "Pages/CreateForm";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  // On Reload check if the user is logged in or not.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(SignInEvent(user));
      } else {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
          .then((re) => {
            dispatch(SignInEvent(re.user));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  }, [auth, dispatch]);

  const isLogged = useSelector((state) => state.isLogged);
  console.log("State in app: ", isLogged);
  return (
    <div>
      {isLogged.user == null ? (
        <div>Please Logg In</div>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create/:type" element={<CreateForm />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
