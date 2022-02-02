import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faStar, faEye } from "@fortawesome/free-regular-svg-icons";
import { faPalette, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons";
import logo from "assets/logo.png";
import FilledButton from "components/Buttons/filledButton";
import DropdownWithIcon from "components/Dropdown/DropdownwithIcon";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { SignOut } from "services/firebase/firebase.auth";
import {
  startLoading,
  loggedOut,
  setUser,
} from "store/authentication/authentication.slice";

const FormHeader = ({ title }) => {
  const dispatch = useDispatch();
  const [ddState, setDdState] = useState(false);
  const toggleDropdown = () => {
    setDdState(!ddState);
  };
  const signOut = () => {
    dispatch(startLoading());
    SignOut((user) => {
      dispatch(setUser(user));
    });
  };
  const { user } = useSelector((state) => state.authentication);
  return (
    <header className="fixed top-0 p-2 w-full bg-white h-28 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-7 mx-3 my-auto" src={logo} alt="logo" />
          <div>{title}</div>

          <FontAwesomeIcon
            className="hover:cursor-pointer"
            title="Move to folder"
            icon={faFolder}
          />

          <FontAwesomeIcon
            className="hover:cursor-pointer"
            title="Star"
            icon={faStar}
          />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPalette} />
          <FontAwesomeIcon icon={faEye} />
          <FontAwesomeIcon icon={faUndo} />
          <FontAwesomeIcon icon={faRedo} />
          <FilledButton
            color="text-white"
            background="bg-purple py-2"
            text="Send"
          />
          <DropdownWithIcon />
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
      <div className="flex items-center justify-center">resp</div>
    </header>
  );
};
export default FormHeader;
