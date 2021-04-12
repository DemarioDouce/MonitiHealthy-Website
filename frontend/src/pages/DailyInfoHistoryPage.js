import React, { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
import App from "../App";
import axios from "axios";
function DailyInfoHistoryPage() {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [healthinfos, setHealthinfos] = useState([]);
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
  const apiUrl = "http://localhost:3000/api/all-healthinfo";

  useEffect(() => {
    readCookie();
    const getHealthInfo = async () => {
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
            console.log(result.data);
            setHealthinfos(result.data)
            //console.log(result.data)
            
          //}
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
        //rowsArray(data);
      };  
      getHealthInfo();
  }, []);
  return (
    <>
      {thisScreen !== "auth" ? (
        <Container>
          <PatientBottomNavComponent index={3} setScreen={setThisScreen} />
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
                {healthinfos.map((healthinfo) => (<ListGroup.Item
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
            </div>
          </div>
        </Container>
      ) : (
        <App />
      )}
    </>
  );
}

export default DailyInfoHistoryPage;
