import { Container, ListGroup } from "react-bootstrap";
//Load react-router-dom package
import { Link } from "react-router-dom";
//Component
import Button from "@material-ui/core/Button";
import FooterComponent from "../res/components/FooterComponent";
import axios from "axios";
import React, { useState, useEffect } from "react";
import App from "../App";
import { Hidden } from "@material-ui/core";

function ViewAllPatientPage() {
  const scsreen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [patients, setPatients] = useState([]);
  const apiUrl = "http://localhost:3000/list-patients";

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

  useEffect(() => {
    readCookie();
    const fetchData = async () => {
      axios
        .get(apiUrl)
        .then((result) => {
          console.log("result.data:", result.data);
          //check if the student has logged in
          setPatients(result.data);
          console.log(patients);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      {thisScreen !== "auth" ? (
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
              <ListGroup>
                {patients.map((patient, id) => (
                  <ListGroup.Item
                    style={{
                      width: "100%",
                      padding: "12px 20px",
                      margin: "8px 0",
                      display: "inline-block",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                      key: { id },
                    }}
                  >
                    {patient.fullName}
                    <div style={{ visibility: "hidden" }}>
                      {patient.userName}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/nurse-dashboard" style={{ textDecoration: "none" }}>
                <p style={{ margin: "20px" }}>Go Back</p>
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
}

export default ViewAllPatientPage;
