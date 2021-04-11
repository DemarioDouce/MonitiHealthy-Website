import React, { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
import App from "../App";
import axios from "axios";
function DailyInfoHistoryPage() {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
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
                  Cras justo odio
                </ListGroup.Item>
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
                  Dapibus ac facilisis in
                </ListGroup.Item>
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
