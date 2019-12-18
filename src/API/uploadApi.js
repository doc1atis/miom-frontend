import Axios from "axios";
export default Axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "authorization-x-token": localStorage.getItem("jwtToken"),
    "content-type": "multipart/form-data"
  }
});
