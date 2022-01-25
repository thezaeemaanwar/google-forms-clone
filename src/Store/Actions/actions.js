import { LOGIN, LOGOUT } from "./actionTypes";

export const SignInEvent = (user) => {
  return { type: `${LOGIN}`, payload: { user: user } };
};

export const SignOutEvent = () => {
  return { type: `${LOGOUT}`, payload: { user: null } };
};
