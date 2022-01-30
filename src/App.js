import { useDispatch, useSelector } from "react-redux";
import PublicRoutes from "components/routing/public_routes";
import Loading from "components/Loaders/page_loader";
import Landing from "views/Landing";
import { useEffect } from "react";
import { checkLogged } from "services/firebase/firebase.auth";
import { loggedIn, loggedOut } from "store/authentication/authentication.slice";

const App = () => {
  const dispatch = useDispatch();
  const { logged, loading } = useSelector((state) => state.authentication);
  console.log("Loading: ", loading, ", logged: ", logged);

  useEffect(() => {
    const dispatchCallback = (user) => {
      if (user) {
        dispatch(loggedIn({ user: user }));
      } else dispatch(loggedOut());
    };
    checkLogged(dispatchCallback);
  }, [dispatch]);

  return (
    <div>{loading ? <Loading /> : logged ? <PublicRoutes /> : <Landing />}</div>
  );
};

export default App;
