import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "Assets/logo.png";
import dots from "Assets/dots.png";

const HomeHeader = () => {
  const user = useSelector((state) => state.isLogged.user);

  return (
    <header className="fixed top-0 p-2 w-full bg-white h-16 flex flex-row justify-between items-center">
      <div className="flex items-center">
        <div className="w-12 p-3 h-12 hover:bg-hoverGrey hover:cursor-pointer rounded-full flex justify-center items-center">
          <FontAwesomeIcon className="text-lg" icon={faBars} />
        </div>
        <img className="w-7 mx-3 my-auto" src={Logo} alt="logo" />
        <div className="text-2xl p1 font-sans">Forms</div>
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
        <img
          className="rounded-full w-10 h-10 p-1"
          src={user.photoURL}
          alt="user"
        />
      </div>
    </header>
  );
};
export default HomeHeader;
