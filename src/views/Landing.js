import FilledButton from "components/Buttons/filledButton";
import OutLinedButton from "components/Buttons/outLinedButton";
import LandingHeader from "components/layout/Headers/LandingHeader";
import bg from "assets/bg-1.png";
import { useDispatch } from "react-redux";
import {
  setUser,
  startLoading,
} from "store/authentication/authentication.slice";
import { SignIn } from "services/firebase/auth.firebase";

const Landing = () => {
  const dispatch = useDispatch();
  const dispatchCallback = (payload) => {
    dispatch(setUser(payload));
  };
  const signIn = () => {
    dispatch(startLoading());
    SignIn(dispatchCallback);
  };
  return (
    <div>
      <LandingHeader />
      <div className="flex w-full items-center justify-center pt-24">
        <div className="flex w-4/5 mt-24 items-center justify-between">
          <div className="flex flex-col w-1/3 ">
            <div
              className="text-6xl m-1 text-black"
              style={{ lineHeight: "72px" }}
            >
              Get insights quickly, with Google Forms
            </div>
            <div className="text-xl py-4 m-2">
              Easily create and share online forms and surveys, and analyze
              responses in real-time.
            </div>
            <div>
              <FilledButton
                color="text-white"
                background="bg-blue"
                text="Try Forms for Work"
              />
              <OutLinedButton
                color="text-blue"
                text="Go to Forms"
                onClick={() => signIn()}
              />
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
