import React, { useState } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientDashboardPage = () => {
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
            <h1>Welcome Back Nurse</h1>
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
              >
                LOGOUT
              </Button>
            </Link>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientDashboardPage;
