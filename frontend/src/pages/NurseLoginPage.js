import React from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

const NurseLoginPage = (props) => {
  //Login nurse.
  const loginSubmit = (e) => {
    props.history.push("/nurse-dashboard");
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
            <Form onSubmit={loginSubmit}>
              <h1>Nurse Login</h1>
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
                  name="username"
                  id="username"
                  placeholder="Username"
                  type="text"
                  required
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
                Are you a patient?{" "}
                <Link to="/patient-login" style={{ textDecoration: "none" }}>
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

export default NurseLoginPage;
