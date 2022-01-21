import SignIn from "Pages/SignIn";
import Landing from "Pages/Landing";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignInEvent } from "Store/Actions/actions";
import { Routes, Route } from "react-router-dom";
import CreateForm from "Pages/CreateForm";

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  // On Reload check if the user is logged in or not.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(SignInEvent(user));
      }
    });
  }, []);

  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div>
      {isLogged.user == null ? (
        <SignIn />
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateForm />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
