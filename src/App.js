import { useDispatch, useSelector } from "react-redux";
import PublicRoutes from "components/routing/public.routes";
import Loading from "components/Loaders/page_loader";
import Landing from "views/Landing";
import { useEffect } from "react";
import { checkLogged } from "services/firebase/firebase.auth";
import { setUser } from "store/authentication/authentication.slice";

const App = () => {
  const dispatch = useDispatch();
  const { logged, loading } = useSelector((state) => state.authentication);

  useEffect(() => {
    const dispatchCallback = (user) => {
      dispatch(setUser({ user }));
    };
    checkLogged(dispatchCallback);
  }, [dispatch]);

  if (loading) return <Loading />;
  else return <div>{logged ? <PublicRoutes /> : <Landing />}</div>;
};

export default App;
