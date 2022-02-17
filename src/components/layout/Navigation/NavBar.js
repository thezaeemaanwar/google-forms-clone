import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

const NavBar = ({ type }) => {
  const { theme } = useSelector((state) => state.form);
  return (
    <div className="flex items-center justify-center">
      <NavLink
        to={`${type}/edit`}
        className={(nav) =>
          nav.isActive
            ? `${theme.color}-border ${theme.color}-text border-b-4 p-2 px-4`
            : "border-b-4 p-2 px-4 border-white"
        }
      >
        Questions
      </NavLink>
      <NavLink
        to={`${type}/responses`}
        className={(nav) =>
          nav.isActive
            ? `${theme.color}-border ${theme.color}-text border-b-4 p-2 px-4 `
            : "border-b-4 p-2 px-4 border-white"
        }
      >
        Responses
      </NavLink>
      <NavLink
        to={`${type}/settings`}
        className={(nav) =>
          nav.isActive
            ? `${theme.color}-border ${theme.color}-text border-b-4 p-2 px-4`
            : "border-b-4 p-2 px-4 border-white"
        }
      >
        Settings
      </NavLink>
    </div>
  );
};

NavBar.defaultProps = {
  type: "blank",
};
NavBar.propTypes = {
  type: PropTypes.string,
};
export default NavBar;
