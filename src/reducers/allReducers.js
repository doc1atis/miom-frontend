import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import albumReducer from "./albumReducer";
const allReducers = combineReducers({
  authReducer,
  albumReducer,
  form: formReducer
});

export default allReducers;
