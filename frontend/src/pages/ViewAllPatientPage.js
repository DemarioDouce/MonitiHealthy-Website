import { Container, ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
//Load react-router-dom package
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";
//Component
import FooterComponent from "../res/components/FooterComponent";

function ViewAllPatientPage(props) {
  const [patients, setPatients] = useState([]);
  const apiUrl = "http://localhost:3000/all_patients";
  //const handleOnSubmit = (event) => {
  //  event.preventDefault();
  //  props.history.push({
  //    pathname: "/all-patient-medinfo",
  //    state: { detail: 'some_value' }
  //  });
  //};
  function handleOnSubmit(name) {
    props.history.push({
      pathname: "/all-patient-medinfo",
      state: { detail: name }
    });
  }
  function handleAddVital(name) {
    props.history.push({
      pathname: "/nurse-add-patientinfo",
      state: { detail: name }
    });
  }
  useEffect(() => {
    const getPatients = async () => {
      console.log("--- in getAlert function ---");
      await axios.get(apiUrl)
        .then(result => {
          //console.log('result.data:',result.data)
          //check if the user has logged in
          //if(result.data.screen !== 'auth')
          //{
            
            //console.log('data in if:', result.data )
            //setData(result.data);
            //setRowData(result.data);
            console.log("--- in getAlertAxios function ---");
            setPatients(result.data)
            //console.log(result.data)
            
          //}
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
        //rowsArray(data);
      };  
      getPatients();
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
            <ListGroup>
            {patients.map((patient) => (<ListGroup.Item
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
                  Patient Name: {patient.fullName}<br></br>
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
                    onClick={() => handleOnSubmit(patient._id)}
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
                    onClick={() => handleAddVital(patient._id)}
                  >
                    Add Vital Signs
                  </Button>
                </ListGroup.Item>))}
            </ListGroup>
            <Link to="/nurse-dashboard" style={{ textDecoration: "none" }}>
              <p style={{ margin: "20px" }}>Go Back</p>
            </Link>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default ViewAllPatientPage;
