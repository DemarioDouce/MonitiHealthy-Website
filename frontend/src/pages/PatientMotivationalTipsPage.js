import React, { useState, useEffect } from "react";
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
import { Container, ListGroup } from "react-bootstrap";
import axios from "axios";

const PatientMotivationalTipsPage = () => {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  return (
    <Container>
      <PatientBottomNavComponent index={6} setScreen={setThisScreen} />
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
          <h1>List patient motivational tips here</h1>
        </div>
      </div>
    </Container>
  );
};

export default PatientMotivationalTipsPage;
