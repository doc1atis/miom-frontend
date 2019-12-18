import history from "../history";
const logout = () => {
  localStorage.removeItem("jwtToken");
  history.push("/login");
  return { type: "LOG_OUT_USER", payload: "" };
};
export default logout;
