import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./actions";
const initialState = {
  currentUser: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case "REGISTER_FAILURE":
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
