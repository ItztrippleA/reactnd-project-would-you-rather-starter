import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import middleware from "./redux/middleware";
import Login from "./components/Login";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("root")
);
