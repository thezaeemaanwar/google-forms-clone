import { useDispatch } from "react-redux";
import { LOGIN, LOGOUT } from "./actionTypes";

export const SignInEvent = (user) => {
  // return (dispatch) => {
  //   dispatch({ type: `${LOGIN}`, payload: { user: user } });
  // };
  return { type: `${LOGIN}`, payload: { user: user } };
};

export const SignOutEvent = (user) => {
  // return (dispatch) => {
  //   dispatch({ type: `${LOGOUT}`, payload: { user: user } });
  // };
  return { type: `${LOGOUT}`, payload: { user: user } };
};
