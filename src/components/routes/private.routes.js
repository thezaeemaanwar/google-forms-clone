import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { logged } = useSelector((state) => state.authentication);
  return logged ? (
    children
  ) : (
    <Navigate to="/landing" state={{ form: location }} />
  );
};

export default PrivateRoute;
