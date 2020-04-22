import React from "react";
import ReactDOM from "react-dom";
// import bootstrap for styling components after npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import allReducers from "./reducers/allReducers";
import App from "./components/App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  { authReducer: { authenticated: localStorage.getItem("jwtToken") } }, // initialize the state before app start up
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
