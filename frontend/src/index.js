import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/redux/Store";
import App from "./app/App.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
