import FilledButton from "components/Buttons/filledButton";
import OutLinedButton from "components/Buttons/outLinedButton";
import LandingHeader from "components/layout/Headers/LandingHeader";
import bg from "assets/bg-1.png";

const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <div className="flex w-full items-center justify-center pt-24">
        <div className="flex w-4/5 mt-24 items-center justify-between">
          <div className="flex flex-col w-1/3 ">
            <div className="text-6xl text-black" style={{ lineHeight: "72px" }}>
              Get insights quickly, with Google Forms
            </div>
            <div className="text-xl py-4">
              Easily create and share online forms and surveys, and analyze
              responses in real-time.
            </div>
            <div>
              <FilledButton
                color="white"
                background="blue"
                text="Try Forms for Work"
              />
              <OutLinedButton color="blue" text="Go to Forms" />
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="rounded-lg shadow-xl w-full"
              src={bg}
              alt="Google Forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
