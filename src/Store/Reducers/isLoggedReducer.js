import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { LOGIN, LOGOUT } from "Store/Actions/actionTypes";

const initialState = {
  loading: true,
  user: null,
  error: null,
};

const isLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}`:
      return (state = {
        loading: false,
        user: action.payload.user,
        error: action.payload.error,
      });
    case `${LOGOUT}`:
      return (state = { logged: false, user: action.payload.user });
    default:
      return state;
  }
};

export default isLoggedReducer;
