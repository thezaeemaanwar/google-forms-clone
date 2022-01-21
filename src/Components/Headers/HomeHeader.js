import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "Assets/logo.png";

const HomeHeader = () => {
  const user = useSelector((state) => state.isLogged.user);

  return (
    <header className="fixed p-2 w-full bg-white h-16 flex flex-row justify-between items-center">
      <div className="flex items-center">
        <div className="w-9 p-3">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <img className="w-7 mx-3 my-auto" src={Logo} />
        <div className="text-xl p1">Forms</div>
      </div>
      <div className="bg-grey h-12 w-1/2 rounded-lg text-base flex p-1 items-center">
        <div
          for="search-bar"
          className="p-2 px-3 hover:bg-hoverGrey m-2 rounded-full active:bg-white"
        >
          <FontAwesomeIcon className="text-md" icon={faSearch} />
        </div>
        <input
          id="search-bar"
          name="search-bar"
          className="w-full bg-transparent active:border-none focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      {user.displayName}
    </header>
  );
};
export default HomeHeader;
