import { useSelector } from "react-redux";
import PublicRoutes from "components/routing/public_routes";
import Loading from "components/Loaders/page_loader";
import Landing from "views/Landing";

const App = () => {
  const { logged, loading } = useSelector((state) => state.authentication);
  return (
    <div>{loading ? <Loading /> : logged ? <PublicRoutes /> : <Landing />}</div>
  );
};

export default App;
