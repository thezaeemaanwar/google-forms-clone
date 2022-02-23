import { Routes, Route } from "react-router-dom";
import CreateForm from "views/CreateForm";
import Home from "views/Home";
import { useSelector } from "react-redux";
import Responses from "components/form/Responses";
import Settings from "components/form/Settings";
import NotFound from "views/404";
import Edit from "components/form/Edit";
import PropTypes from "prop-types";
import Landing from "views/Landing";
import PrivateRoute from "components/routes/private.routes";

const PublicRoutes = ({ logged }) => {
  const { theme } = useSelector((state) => state.form);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="create"
        element={
          <PrivateRoute>
            <CreateForm theme={theme} />
          </PrivateRoute>
        }
      >
        <Route path=":type">
          <Route
            index
            path="edit"
            element={
              <PrivateRoute>
                <Edit theme={theme} />
              </PrivateRoute>
            }
          />
          <Route
            path="responses"
            element={
              <PrivateRoute>
                <Responses />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
      <Route path="landing" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

PublicRoutes.defaultProps = {
  logged: false,
};
PublicRoutes.propTypes = {
  logged: PropTypes.bool,
};
export default PublicRoutes;
