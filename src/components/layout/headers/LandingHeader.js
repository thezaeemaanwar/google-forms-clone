import logo from "assets/logo.png";

const LandingHeader = () => {
  return (
    <header className="fixed top-0 p-2 w-full bg-white h-16 flex flex-row justify-between items-center">
      <div className="flex items-center">
        <img className="w-7 mx-3 my-auto" src={logo} alt="logo" />
        <div className="text-2xl p1">Google</div>
        <div className="text-xl p1">Forms</div>
      </div>
    </header>
  );
};

export default LandingHeader;
