const INITIAL_STATE = { authenticated: "", errorMessage: "" };
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, authenticated: action.payload };
    case "LOG_IN_USER":
      return { ...state, authenticated: action.payload };
    case "LOG_OUT_USER":
      return { ...state, authenticated: action.payload };
    case "AUTH_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};
export default authReducer;
