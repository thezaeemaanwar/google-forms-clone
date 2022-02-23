import { useDispatch, useSelector } from "react-redux";
import PublicRoutes from "components/routes/public.routes";
import Loading from "components/loaders/page.loader";
import { useEffect } from "react";
import { checkLogged } from "services/firebase/auth.firebase";
import { setUser } from "store/authentication/authentication.slice";
import { getFormsFromFirebase } from "services/firebase/firestore.firebase";
import { setForms, setLoading } from "store/data/allForms.slice";

const App = () => {
  const dispatch = useDispatch();
  const { logged, loading, user } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    const dispatchCallback = (user) => {
      dispatch(setUser({ user }));
    };
    checkLogged(dispatchCallback);
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLoading(true));
    const dispatchCallback = (forms) => {
      dispatch(setForms({ forms }));
    };
    const loadDispatch = () => dispatch(setLoading(false));
    if (user) {
      getFormsFromFirebase(user.uid, dispatchCallback, loadDispatch);
    }
  }, [user, dispatch]);

  if (loading) return <Loading />;
  else
    return (
      <div>
        <PublicRoutes logged={logged} />
      </div>
    );
};

export default App;
