import { faFolder, faStar, faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisV,
  faPalette,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import logo from "assets/logo.png";
import FilledButton from "components/buttons/FilledButton";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { SignOut } from "services/firebase/auth.firebase";
import {
  startLoading,
  setUser,
} from "store/authentication/authentication.slice";
import { Link } from "react-router-dom";
import Icon from "components/icon/Icon";
import NavBar from "components/layout/navigation/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormHeader = ({ id, title, toggleThemeEditor }) => {
  const dispatch = useDispatch();
  const [ddState, setDdState] = useState(false);
  const toggleDropdown = () => {
    setDdState(!ddState);
  };
  const signOut = () => {
    dispatch(startLoading());
    SignOut((user) => {
      dispatch(setUser({ user }));
    });
  };
  const { user } = useSelector((state) => state.authentication);
  const { saved } = useSelector((state) => state.form);
  return (
    <header className="fixed top-0 p-2 w-full bg-white h-28 flex flex-col justify-between shadow z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-7 mx-3 my-auto" src={logo} alt="logo" />
          </Link>
          <div className="text-xl">{title}</div>

          <Icon icon={faFolder} label="Move to folder" />
          <Icon icon={faStar} label="Star" />
          <div className="text-xs">{saved}</div>
        </div>
        <div className="flex items-center">
          <Icon icon={faPalette} label="Theme" onClick={toggleThemeEditor} />
          <div className="hidden md:flex ">
            <Icon icon={faEye} label="Preview" />
            <Icon icon={faUndo} label="Undo" />
            <Icon icon={faRedo} label="Redo" />

            <FilledButton
              color="text-white"
              background="bg-purple py-2"
              text="Send"
            />
            <FontAwesomeIcon icon={faEllipsisV} className="px-3" />
          </div>
          <div className="hover:cursor-pointer" onClick={toggleDropdown}>
            <img
              className="rounded-full w-10 h-10 p-1"
              src={user.profileImage}
              alt="user"
            />
            {ddState ? (
              <div
                className="fixed right-2 bg-white p-3 border border-hoverGrey hover:bg-hoverGrey hover:cursor-pointer"
                onClick={signOut}
              >
                Logout
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <NavBar type={id} />
    </header>
  );
};

FormHeader.defaultProps = {
  title: "Untitled Form",
};

export default FormHeader;
