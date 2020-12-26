import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
