import React from "react";
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

const SendAlertPage = () => {
  return (
    <>
      <Container>
        <PatientBottomNavComponent index={4} />
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
            <Form>
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
              <Link to="/patient-dashboard" style={{ textDecoration: "none" }}>
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

export default SendAlertPage;
