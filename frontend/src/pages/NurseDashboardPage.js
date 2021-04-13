import React, { useState, useEffect } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";
import axios from "axios";
import App from "../App";

const NurseDashboardPage = (props) => {
  const { userName, screen } = (props.location && props.location.state) || {};
  const [thisScreen, setThisScreen] = useState(screen);
  //setting the screen variable for local storage to the users firstname
  //this will reset back to value "auth" on patientbottomnavcomponent
  localStorage.setItem("screen", thisScreen);

  //check if the user already logged-in
  const readCookie = async () => {
    try {
      console.log("--- in readCookie function ---");

      //
      const res = await axios.get("/read_cookie");
      //
      if (res.data.screen !== undefined) {
        setThisScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      setThisScreen("auth");
      console.log(e);
    }
  };
  //runs the first time the view is rendered
  //to check if user is signed in
  useEffect(() => {
    readCookie();
  }, []); //only the first render

  // called when nurse clicks on Logout button
  // to clear the cookie and set the screen state variable
  // back to its initial state.
  const deleteCookie = async () => {
    try {
      await axios.get("/signoutnurse");
      setScreen("auth");
      localStorage.setItem("screen", "auth");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {thisScreen !== "auth" ? (
        <Container>
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
              <h1>Welcome Back Nurse {thisScreen}!</h1>
              <Link to="/all-patient" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    color: "#fff",
                    padding: "10px 30px",
                    fontSize: "16px",
                    margin: "10px 10px",
                    backgroundColor: "#0d6efd",
                    border: "2px solid #0d6efd",
                  }}
                  variant="contained"
                >
                  VIEW PATIENTS
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    color: "#0d6efd",
                    padding: "10px 30px",
                    fontSize: "16px",
                    margin: "10px 10px",
                    backgroundColor: "#fff",
                    border: "2px solid #0d6efd",
                  }}
                  variant="contained"
                  onClick={deleteCookie}
                >
                  LOGOUT
                </Button>
              </Link>
              <FooterComponent color="black" />
            </div>
          </div>
        </Container>
      ) : (
        <App />
      )}
    </>
  );
};

export default NurseDashboardPage;
