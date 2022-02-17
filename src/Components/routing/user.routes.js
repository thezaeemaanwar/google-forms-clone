import Landing from "views/Landing";
import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/Landing" element={<Landing />} />
    </Routes>
  );
};

export default UserRoutes;
