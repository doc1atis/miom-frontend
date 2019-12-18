import API from "../API/api";
import history from "../history";
const registerUser = formInputs => async dispatch => {
  try {
    const response = await API.post("/register", formInputs);
    dispatch({ type: "REGISTER_USER", payload: response.data.token });
    localStorage.setItem("jwtToken", response.data.token);
    history.push("/");
  } catch (error) {
    dispatch({ type: "AUTH_ERROR", payload: error.response.data.message });
  }
};
export default registerUser;
