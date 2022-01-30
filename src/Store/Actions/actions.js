import { LOGIN, LOGOUT } from "./action_types";

export const SignInEvent = (user) => {
  return { type: `${LOGIN}`, payload: { user: user } };
};

export const SignOutEvent = () => {
  return { type: `${LOGOUT}`, payload: { user: null } };
};
