import API from "../API/api";
import history from "../history";
const login = formInputs => async dispatch => {
  try {
    const response = await API.post("/login", formInputs);
    dispatch({ type: "LOG_IN_USER", payload: response.data.token });
    localStorage.setItem("jwtToken", response.data.token);
    history.push("/");
  } catch (error) {
    const { isAxiosError, response } = error;
    if ((isAxiosError, response)) {
      dispatch({ type: "AUTH_ERROR", payload: "invalid email or password" });
    }
  }
};

export default login;
