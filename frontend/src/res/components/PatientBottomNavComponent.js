import React, { useState } from "react";
//Load @material-ui/core package
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
//Load material-ui/icons package
import InfoIcon from "@material-ui/icons/Info";
import TimelineIcon from "@material-ui/icons/Timeline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientBottomNavComponent = () => {
  const [value, setValue] = useState(0);
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
          to="/patient-login"
          label="ADD DAILY INFO"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          label="DAILY INFO HISTORY"
          icon={<TimelineIcon />}
        />
        <BottomNavigationAction label="HEART DISEASE" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="SEND ALERT"
          icon={<NotificationImportantIcon />}
        />
        <BottomNavigationAction
          label="EMERGENCY HISTORY"
          icon={<HistoryIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default PatientBottomNavComponent;
