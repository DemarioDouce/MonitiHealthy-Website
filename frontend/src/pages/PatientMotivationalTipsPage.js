import React, { useState, useEffect } from "react";
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
import { Container, ListGroup } from "react-bootstrap";
import axios from "axios";
import App from "../App";
const PatientMotivationalTipsPage = () => {
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [tips, setTips] = useState([]);
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
  const apiUrl = "http://localhost:3000/list-motivational-tips";
  useEffect(() => {
    readCookie();
    const getTips = async () => {
      console.log("--- in getAlert function ---");
      await axios
        .get(apiUrl)
        .then((result) => {
          console.log("--- in getAlertAxios function ---");
          setTips(result.data);
          //console.log(result.data)
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
      //rowsArray(data);
    };
    getTips();
  }, []);
  return (
    <div>
      {thisScreen !== "auth" ? (
        <Container>
          <PatientBottomNavComponent index={6} setScreen={setThisScreen} />
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
                {tips.map((tip) => (
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
                    Message: {tip.message}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </Container>
      ) : (
        <App />
      )}
    </div>
  );
};

export default PatientMotivationalTipsPage;
