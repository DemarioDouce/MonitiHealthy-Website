import React, { useState, useEffect } from "react";
import axios from "axios";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";
import PatientDashboardPage from "./PatientDashboardPage";

const PatientLoginPage = (props) => {
  //state variable for the screen, backend will set the screen for patient's username
  const [screen, setScreen] = useState("auth");
  //store input field data, username and password
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const apiUrl = "http://localhost:3000/signinpatient";

  const [state, setState] = useState({ userName, screen });

  const auth = async (e) => {
    e.preventDefault();
    console.log("calling auth");
    console.log(userName);

    try {
      //make a get request to /authenticate end-point on the server
      const loginData = { auth: { userName, password } };
      //call api
      const res = await axios.post(apiUrl, loginData).then((result) => {
        props.history.push({ pathname: "/patient-dashboard", state });
      });
      //process the response
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      //print the error
      console.log(e);
    }
  };

  //
  return (
    <>
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
            <Form onSubmit={auth}>
              <h1>Login</h1>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "50%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  name="userName"
                  id="userName"
                  placeholder="Username"
                  type="text"
                  required
                  onChange={(e) => setuserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "50%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  name="password"
                  id="password"
                  placeholder="Password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
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
                type="submit"
              >
                LOGIN
              </Button>
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
                >
                  CANCEL
                </Button>
              </Link>
              <p>
                Are you a nurse?{" "}
                <Link to="/nurse-login" style={{ textDecoration: "none" }}>
                  Login here.
                </Link>
              </p>
            </Form>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientLoginPage;
