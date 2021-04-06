import React, { useState } from "react";
import axios from "axios";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Form, Row, Col } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link, withRouter } from "react-router-dom";
import SignUpSuccess from "./SignUpSuccess";

const PatientSignUpPage = (props) => {
  const [patient, setPatient] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false);

  const apiUrl = "http://localhost:3000/registerpatient";

  //Signup nurse.
  const signupSubmit = (e) => {
    e.preventDefault();
    //this is the data of the nurse were saving
    const data = {
      firstName: patient.firstName,
      lastName: patient.lastName,
      userName: patient.userName,
      password: patient.password,
    };

    //send post request to the backend using axios
    axios
      .post(apiUrl, data)
      .then((result) => {
        setRegistered(true);
      })
      .catch((error) => {
        setRegistered(false);
        console.log(error);
      });
  };

  const onChange = (e) => {
    e.persist();
    setPatient({ ...patient, [e.target.name]: e.target.value });
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
            {!registered ? (
              <Form onSubmit={signupSubmit}>
                <h1>Signup</h1>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        style={{
                          width: "100%",
                          padding: "12px 20px",
                          margin: "8px 0",
                          display: "inline-block",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          boxSizing: "border-box",
                        }}
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        type="text"
                        required
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        style={{
                          width: "100%",
                          padding: "12px 20px",
                          margin: "8px 0",
                          display: "inline-block",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          boxSizing: "border-box",
                        }}
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        type="text"
                        required
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        style={{
                          width: "100%",
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
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        style={{
                          width: "100%",
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
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
                  type="submit"
                >
                  SIGNUP
                </Button>

                <Link to="/" style={{ textDecoration: "none" }}>
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
                    CANCEL
                  </Button>
                </Link>
                <p>
                  Are you a nurse?{" "}
                  <Link to="/nurse-signup" style={{ textDecoration: "none" }}>
                    Signup here.
                  </Link>
                </p>
              </Form>
            ) : (
              <SignUpSuccess accountType={"patient"} path={"/patient-login"} />
            )}
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientSignUpPage;
