import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-xl">
      <div className="text-6xl p-6">Page not found</div>
      <div>
        Click{" "}
        <Link className="text-blue" to="/">
          here
        </Link>{" "}
        to return to homepage.
      </div>
    </div>
  );
};

export default NotFound;
