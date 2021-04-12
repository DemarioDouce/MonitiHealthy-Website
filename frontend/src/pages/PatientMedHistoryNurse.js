import { Container, ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
//Load react-router-dom package
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";
//Component
import FooterComponent from "../res/components/FooterComponent";

function PatientMedHistoryNurse(props) {
  const [info, setInfo] = useState();
  const [healthHistory, setHealthHistory] = useState([]);
  console.log(props.location.state.detail)

  //setInfo(props.location.state.detail);
  
  useEffect(() => {
    setInfo(props.location.state.detail);
    const apiUrl = "http://localhost:3000/api/patientrecs/"+props.location.state.detail;
    const getPatientHistory = async () => {
      console.log("--- in getPatientHistory function ---");
      await axios.get(apiUrl)
        .then(result => {
          //console.log('result.data:',result.data)
          //check if the user has logged in
          //if(result.data.screen !== 'auth')
          //{
            
            //console.log('data in if:', result.data )
            //setData(result.data);
            //setRowData(result.data);
            console.log("--- in getPatientHistoryAxios function ---");
            setHealthHistory(result.data)
            console.log(result.data)
            
          //}
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
        //rowsArray(data);
      };  
      getPatientHistory();
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
                {healthHistory.map((healthinfo) => (<ListGroup.Item
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
                  Pulse Rate: {healthinfo.pulseRate}<br></br>
                  Weight: {healthinfo.weight}<br></br>
                  Temperature: {healthinfo.temperature}<br></br>
                  Blood Pressure: {healthinfo.bloodPressure}<br></br>
                  Respiratory Rate: {healthinfo.respiratoryRate}<br></br>
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

export default PatientMedHistoryNurse;
