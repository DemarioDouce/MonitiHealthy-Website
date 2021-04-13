import { Container, ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
//Load react-router-dom package
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";
//Component
import FooterComponent from "../res/components/FooterComponent";
import App from "../App";

function ViewAllPatientPage(props) {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [patients, setPatients] = useState([]);
  const apiUrl = "http://localhost:3000/all_patients";

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

  function handleOnSubmit(name, fullName) {
    props.history.push({
      pathname: "/all-patient-medinfo",
      state: { detail: name, fullName: fullName },
    });
  }
  function handleAddVital(name, fullName) {
    props.history.push({
      pathname: "/nurse-add-patientinfo",
      state: { detail: name, fullName: fullName },
    });
  }

  function sendMotivationOnClick(name, fullName) {
    props.history.push({
      pathname: "/send-motivational-tips",
      state: { detail: name, fullName },
    });
  }
  useEffect(() => {
    readCookie();
    const getPatients = async () => {
      console.log("--- in getAlert function ---");
      await axios
        .get(apiUrl)
        .then((result) => {
          console.log("--- in getAlertAxios function ---");
          setPatients(result.data);
          //console.log(result.data)

          //}
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
      //rowsArray(data);
    };
    getPatients();
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
                height: "90vh",
              }}
            >
              <Link to="/nurse-dashboard" style={{ textDecoration: "none" }}>
                <p style={{ margin: "20px" }}>Go Back</p>
              </Link>
              <ListGroup>
                {patients.map((patient) => (
                  <ListGroup.Item
                    style={{
                      width: "100%",
                      padding: "12px 20px",
                      margin: "8px 0",
                      display: "inline-block",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      boxSizing: "border-box",
                    }}
                  >
                    Patient Name: {patient.fullName}
                    <br></br>
                    <Button
                      style={{
                        color: "#fff",
                        padding: "10px 10px",
                        fontSize: "12px",
                        margin: "10px 10px",
                        backgroundColor: "#0d6efd",
                        border: "2px solid #0d6efd",
                      }}
                      variant="contained"
                      onClick={() =>
                        handleOnSubmit(patient._id, patient.fullName)
                      }
                    >
                      View Medical History
                    </Button>
                    <Button
                      style={{
                        color: "#fff",
                        padding: "10px 10px",
                        fontSize: "12px",
                        margin: "10px 10px",
                        backgroundColor: "#0ba336",
                        border: "2px solid #0ba336",
                      }}
                      variant="contained"
                      onClick={() =>
                        handleAddVital(patient._id, patient.fullName)
                      }
                    >
                      Add Vital Signs
                    </Button>
                    <Button
                      style={{
                        color: "#fff",
                        padding: "10px 10px",
                        fontSize: "12px",
                        margin: "10px 10px",
                        backgroundColor: "#A9A9A9",
                        border: "2px solid #A9A9A9",
                      }}
                      variant="contained"
                      onClick={() => {
                        sendMotivationOnClick(patient._id, patient.fullName);
                      }}
                    >
                      Send Motivational Tips
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>

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
