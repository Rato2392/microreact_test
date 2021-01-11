import React from "react";
//npm install --save react-router-dom
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//componet file
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDom.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
