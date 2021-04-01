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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientBottomNavComponent = ({ index }) => {
  const [value, setValue] = useState(index);
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
        <BottomNavigationAction label="INFO HISTORY" icon={<TimelineIcon />} />
        <BottomNavigationAction label="HEART DISEASE" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="SEND ALERT"
          icon={<NotificationImportantIcon />}
        />
        <BottomNavigationAction label="ALERT HISTORY" icon={<HistoryIcon />} />
        <BottomNavigationAction label="LOGOUT" icon={<ExitToAppIcon />} />
      </BottomNavigation>
    </>
  );
};

export default PatientBottomNavComponent;
