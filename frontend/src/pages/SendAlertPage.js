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

const SendAlertPage = () => {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [alert, setAlert] = useState({
    _id: "",
    message: "",
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
    setAlert({ ...alert, [e.target.name]: e.target.value });
  };

  const apiUrl = "http://localhost:3000/api/send-alert";

  const alertSubmit = (e) => {
    e.preventDefault();

    const data = {
      message: alert.message,
    };
    axios
      .post(apiUrl, data)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <>
      {thisScreen !== "auth" ? (
        <Container>
          <PatientBottomNavComponent index={4} setScreen={setThisScreen} />
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
              <Form onSubmit={alertSubmit}>
                {/* message */}
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
                    as="textarea"
                    name="message"
                    id="message"
                    onChange={onChange}
                    placeholder="Your message will be sent directly to the hospital you are
              associated with."
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
                  SEND
                </Button>
                <Link
                  to="/patient-dashboard"
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
      ) : (
        <App />
      )}
    </>
  );
};

export default SendAlertPage;
