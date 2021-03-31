import React, { useState } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container } from "react-bootstrap";
//Load @material-ui/core package
import {
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
//Load material-ui/icons package
import InfoIcon from "@material-ui/icons/Info";
import TimelineIcon from "@material-ui/icons/Timeline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HistoryIcon from "@material-ui/icons/History";
//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Container>
        <div>
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
              to="/patient-login"
              label="ADD DAILY INFO"
              icon={<InfoIcon />}
            />
            <BottomNavigationAction
              label="DAILY INFO HISTORY"
              icon={<TimelineIcon />}
            />
            <BottomNavigationAction
              label="HEART DISEASE"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              label="SEND ALERT"
              icon={<NotificationImportantIcon />}
            />
            <BottomNavigationAction
              label="EMERGENCY HISTORY"
              icon={<HistoryIcon />}
            />
          </BottomNavigation>
        </div>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "50vw",
              height: "50vh",
            }}
          >
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientDashboard;
