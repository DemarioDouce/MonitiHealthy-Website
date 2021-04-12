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
import PatientDashboardPage from "./pages/PatientDashboardPage";
import NurseDashboardPage from "./pages/NurseDashboardPage";
import AddDailyInfoPage from "./pages/AddDailyInfoPage";
import DailyInfoHistoryPage from "./pages/DailyInfoHistoryPage";
import SendAlertPage from "./pages/SendAlertPage";
import AlertHistoryPage from "./pages/AlertHistoryPage";
import ViewAllPatientPage from "./pages/ViewAllPatientPage";
import PatientHealthTipsPage from "./pages/PatientHealthTipsPage";
import WatchVideoPage from "./pages/WatchVideoPage";
import NurseAddVitalSignPage from "./pages/NurseAddVitalSignPage";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Main */}
      <Route path="/" component={App} exact />
      {/* Login */}
      <Route path="/patient-login" component={PatientLoginPage} exact />
      <Route path="/nurse-login" component={NurseLoginPage} exact />
      {/* Sign up */}
      <Route path="/patient-signup" component={PatientSignUpPage} exact />
      <Route path="/nurse-signup" component={NurseSignUpPage} exact />
      {/* Dashboard */}
      <Route path="/patient-dashboard" component={PatientDashboardPage} exact />
      <Route path="/nurse-dashboard" component={NurseDashboardPage} exact />
      {/* Add daily info */}
      <Route path="/add-daily-info" component={AddDailyInfoPage} exact />
      {/* Daily info history */}
      <Route
        path="/daily-info-history"
        component={DailyInfoHistoryPage}
        exact
      />
      {/* Send alert */}
      <Route path="/send-alert" component={SendAlertPage} exact />
      {/* Alert history */}
      <Route path="/alert-history" component={AlertHistoryPage} exact />
      {/* All all patient */}
      <Route path="/all-patient" component={ViewAllPatientPage} exact />
      {/* Patient health tip page  */}
      <Route path="/health-tips" component={PatientHealthTipsPage} exact />
      {/* Patient watch video page  */}
      <Route path="/watch-video" component={WatchVideoPage} exact />
      {/* Nurse add vital sign page */}
      <Route path="/add-vital-sign" component={NurseAddVitalSignPage} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
