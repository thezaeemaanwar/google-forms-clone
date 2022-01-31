import { Routes, Route } from "react-router-dom";
import CreateForm from "views/CreateForm";
import Home from "views/Home";
import { useSelector } from "react-redux";

const PublicRoutes = () => {
  const { theme } = useSelector((state) => state.questions);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create/:type" element={<CreateForm theme={theme} />} />
    </Routes>
  );
};

export default PublicRoutes;
