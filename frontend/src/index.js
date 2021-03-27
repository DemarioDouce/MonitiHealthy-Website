//Default
import React from "react";
import ReactDOM from "react-dom";
//Load react-router-dom package
import { BrowserRouter, Route, Switch } from "react-router-dom";
//CSS
import "./res/css/index.css";
//Pages
import App from "./App";
import PatientLoginPage from "./pages/PatientLoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/patient-login" component={PatientLoginPage} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
