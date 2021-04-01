import React, { useState } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Card, Row, Col } from "react-bootstrap";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
//Load card component
import CardComponent from "../res/components/CardComponent";
//Load image
import MeatBurgerImage from "../res/img/MeatBurgerImage.jpg";
import WomenWorkingOutImage from "../res/img/WomenWorkingOutImage.jpg";

const PatientDashboard = () => {
  return (
    <>
      <Container>
        <PatientBottomNavComponent />
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
            <h1>Welcome Back</h1>
            {/* Card */}
            <Row>
              <Col>
                <CardComponent
                  img={MeatBurgerImage}
                  title="Eat Health"
                  text="For good health, we need more than 40 different nutrients, and no single food can supply them all."
                />
              </Col>
              <Col>
                <CardComponent
                  img={WomenWorkingOutImage}
                  title="Work Out"
                  text="A good warm-up prepares your body for the challenges of working out, and can help to reduce injury."
                />
              </Col>
            </Row>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientDashboard;
