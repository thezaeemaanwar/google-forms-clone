import { Routes, Route } from "react-router-dom";
import CreateForm from "views/CreateForm";
import Home from "views/Home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create/:type" element={<CreateForm />} />
    </Routes>
  );
};

export default PublicRoutes;
