import API from "../API/uploadApi";
import history from "../history";
const createAlbum = formInputs => async dispatch => {
  try {
    const response = await API.post("/createalbum", formInputs);
    dispatch({ type: "CREATE_ALBUM", payload: response.data });
    history.push("/albums");
  } catch (error) {
    const { isAxiosError, response } = error;
    if ((isAxiosError, response)) {
      dispatch({ type: "AUTH_ERROR", payload: "invalid email or password" });
    }
  }
};

export default createAlbum;
