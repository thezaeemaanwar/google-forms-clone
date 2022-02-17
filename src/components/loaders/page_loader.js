import anim from "assets/animation.gif";

const Loading = () => {
  return (
    <div className="h-screen w-full  flex items-center justify-center">
      <img className="w-8" src={anim} alt="loading..." />
    </div>
  );
};

export default Loading;
