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
import NurseLoginPage from "./pages/NurseLoginPage";
import PatientSignUpPage from "./pages/PatientSignUpPage";
import NurseSignUpPage from "./pages/NurseSignUpPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Main */}
      <Route path="/" component={App} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/login" component={Login} exact />
      {/* Login */}
      <Route path="/patient-login" component={PatientLoginPage} exact />
      <Route path="/nurse-login" component={NurseLoginPage} exact />
      {/* Sign up */}
      <Route path="/patient-signup" component={PatientSignUpPage} exact />
      <Route path="/nurse-signup" component={NurseSignUpPage} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
