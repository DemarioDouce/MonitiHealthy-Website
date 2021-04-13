import React, { useState, useEffect } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Row, Col } from "react-bootstrap";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
//Load card component
import CardComponent from "../res/components/CardComponent";
//Load image
import MeatBurgerImage from "../res/img/MeatBurgerImage.jpg";
import WomenWorkingOutImage from "../res/img/WomenWorkingOutImage.jpg";
//Load react-router-dom package
import { Link } from "react-router-dom";
import axios from "axios";
import App from "../App";

const PatientDashboardPage = (props) => {
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
  return (
    <>
      {thisScreen !== "auth" ? (
        <Container>
          {/* passing setScreen to patient navigation component*/}
          <PatientBottomNavComponent index={0} setScreen={setThisScreen} />
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
              <h1>Welcome Back {thisScreen}</h1>
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
              <Link to="/health-tips" style={{ textDecoration: "none" }}>
                <p style={{ margin: "20px" }}>View More</p>
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

export default PatientDashboardPage;
