import React, { useState } from "react";
import axios from "axios";
//Load @material-ui/core package
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
//Load material-ui/icons package
import InfoIcon from "@material-ui/icons/Info";
import TimelineIcon from "@material-ui/icons/Timeline";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientBottomNavComponent = ({ index, setScreen }) => {
  const [value, setValue] = useState(index);

  //this function will be called when the patient clicks on logout
  //and sets the screen back to auth
  const deleteCookie = async () => {
    try {
      await axios.get("/signoutpatient");
      setScreen("auth");
      console.log("Signed out");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <BottomNavigation
        style={{ width: "100%", backgroundColor: "white" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          component={Link}
          to="/patient-dashboard"
          label="HOME"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/add-daily-info"
          label="ADD INFO"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/daily-info-history"
          label="INFO HISTORY"
          icon={<TimelineIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/send-alert"
          label="SEND ALERT"
          icon={<NotificationImportantIcon />}
        />
        {/* I dont think we need this button for the patient to access,
        I think this feature needs to be on the nurse page - KEN */}
        <BottomNavigationAction
          component={Link}
          to="/alert-history"
          label="ALERT HISTORY"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
          component={Link}
          onClick={deleteCookie}
          label="LOGOUT"
          icon={<ExitToAppIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default PatientBottomNavComponent;
