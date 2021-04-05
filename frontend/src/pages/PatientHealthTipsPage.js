import React from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container } from "react-bootstrap";

//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientHealthTipsPage = () => {
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
            <Link to="/patient-dashboard" style={{ textDecoration: "none" }}>
              <p style={{ margin: "20px" }}>Go Back</p>
            </Link>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientHealthTipsPage;
