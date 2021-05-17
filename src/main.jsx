import React from "react";
import ReactDOM from "react-dom";
import "./styles/_variables.scss";
import "./styles/_typography.scss";
import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector(".app-root")
);
