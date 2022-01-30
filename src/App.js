import { useDispatch, useSelector } from "react-redux";
import PublicRoutes from "components/routing/public_routes";
import Loading from "components/Loaders/page_loader";
import Landing from "views/Landing";
import { useEffect } from "react";
import { checkLogged } from "store/authentication/authentication.slice";

const App = () => {
  const dispatch = useDispatch();
  const { logged, loading } = useSelector((state) => state.authentication);
  useEffect(() => {
    dispatch(checkLogged());
  }, [dispatch]);
  return (
    <div>{logged ? <PublicRoutes /> : loading ? <Loading /> : <Landing />}</div>
  );
};

export default App;
