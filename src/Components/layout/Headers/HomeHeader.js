import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "assets/logo.png";
import dots from "assets/dots.png";
import { useState } from "react";
import { SignOut } from "services/firebase/firebase.auth";
import {
  startLoading,
  setUser,
} from "store/authentication/authentication.slice";

const HomeHeader = () => {
  const { user } = useSelector((state) => state.authentication);
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

  return (
    <header className="fixed top-0 p-2 w-full bg-white h-16 flex flex-row justify-between items-center">
      <div className="flex items-center">
        <div className="w-12 p-3 h-12 hover:bg-hoverGrey hover:cursor-pointer rounded-full flex justify-center items-center">
          <FontAwesomeIcon className="text-lg" icon={faBars} />
        </div>
        <img className="w-7 mx-3 my-auto" src={Logo} alt="logo" />
        <div className="text-2xl p1">Forms</div>
      </div>
      <div className="bg-grey h-12 w-1/2 rounded-lg text-base flex p-1 items-center">
        <div className="p-2 px-3 hover:bg-hoverGrey m-2 rounded-full active:bg-white">
          <FontAwesomeIcon className="text-md" icon={faSearch} />
        </div>
        <input
          className="w-full bg-transparent active:border-none focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex">
        <div className="hover:bg-hoverGrey hover:cursor-pointer p-3 w-10 h-10 rounded-full">
          <img className="" src={dots} alt="menu" />
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
    </header>
  );
};
export default HomeHeader;
