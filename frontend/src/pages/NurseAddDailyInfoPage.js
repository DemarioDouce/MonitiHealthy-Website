import React, { useState, useEffect } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
import App from "../App";
import axios from "axios";
const NurseAddDailyInfoPage = (props) => {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [healthinfo, setHealthInfo] = useState({
    _id: "",
    pulseRate: "",
    bloodPressure: "",
    weight: "",
    temperature: "",
    respiratoryRate: ""
  });
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
  const onChange = (e) => {
    e.persist();
    setHealthInfo({ ...healthinfo, [e.target.name]: e.target.value });
  };

  const apiUrl = "http://localhost:3000/api/patientrecs/"+props.location.state.detail;

  const healthInfoSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      pulseRate: healthinfo.pulseRate,
      bloodPressure: healthinfo.bloodPressure,
      weight: healthinfo.weight,
      temperature: healthinfo.temperature,
      respiratoryRate: healthinfo.respiratoryRate
    };
    axios
      .post(apiUrl, data)
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data)
  };

  useEffect(() => {
    readCookie();
  }, []);
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
              {/* pulseRate */}
              <Form onSubmit={healthInfoSubmit}>
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
                    name="pulseRate"
                    id="pulseRate"
                    placeholder="Pulse rate (per min) e.g 80"
                    type="number"
                    required
                    onChange={onChange}
                  />
                </Form.Group>
                {/* bloodPressure */}
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
                    name="bloodPressure"
                    id="bloodPressure"
                    placeholder="Blood pressure (systolic/diastolic mm hg) e.g 120/80"
                    type="text"
                    required
                    onChange={onChange}
                  />
                </Form.Group>
                {/* weight */}
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
                    name="weight"
                    id="weight"
                    placeholder="Weight (lb) e.g 120.9"
                    type="number"
                    required
                    onChange={onChange}
                  />
                </Form.Group>
                {/* temperature */}
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
                    name="temperature"
                    id="temperature"
                    placeholder="Temperature (C) e.g 23.5"
                    type="number"
                    required
                    onChange={onChange}
                  />
                </Form.Group>
                {/* respiratoryRate */}
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
                    name="respiratoryRate"
                    id="respiratoryRate"
                    placeholder="Respiratory rate (per min) e.g 16"
                    type="number"
                    required
                    onChange={onChange}
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
                  SAVE
                </Button>
                <Link
                  to="/nurse-dashboard"
                  style={{ textDecoration: "none" }}
                >
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
              </Form>
              <FooterComponent color="black" />
            </div>
          </div>
        </Container>
    </>
  );
};

export default NurseAddDailyInfoPage;


