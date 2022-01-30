import { useSelector } from "react-redux";
import PublicRoutes from "components/routing/public_routes";
import Loading from "components/Loaders/page_loader";
import Landing from "views/Landing";

const App = () => {
  const { loading, logged } = useSelector((state) => state.auth);
  console.log("State in app: ", logged);
  return (
    <div>{loading ? <Loading /> : logged ? <PublicRoutes /> : <Landing />}</div>
  );
};

export default App;
