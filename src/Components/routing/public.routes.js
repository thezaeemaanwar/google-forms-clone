import { Routes, Route } from "react-router-dom";
import CreateForm from "views/CreateForm";
import Home from "views/Home";
import { useSelector } from "react-redux";
import Responses from "components/Form/Responses";
import Settings from "components/Form/Settings";
import NotFound from "views/404";
import Edit from "components/Form/Edit";
import PropTypes from "prop-types";

const PublicRoutes = ({ logged }) => {
  const { theme } = useSelector((state) => state.form);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<CreateForm theme={theme} />}>
        <Route path=":type">
          <Route index path="edit" element={<Edit theme={theme} />} />
          <Route path="responses" element={<Responses />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
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
