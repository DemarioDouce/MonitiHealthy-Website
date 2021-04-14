import React, { useState } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

const AiPage = () => {
  //
  const [data, setData] = useState(0);
  //
  const [prediction, setPrediction] = useState("");
  //
  const onChange = (e) => {
    e.persist();
    setData(e.target.value);
  };
  //
  const predictionResults = () => {
    if (data >= 140) {
      setPrediction("High blood pressure.");
    } else if (data >= 120) {
      setPrediction("Pre-high blood pressure.");
    } else if (data >= 90) {
      setPrediction("Ideal blood pressure.");
    } else {
      setPrediction("Low blood pressure.");
    }
  };
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
            <Form>
              <h1>BLOOD PRESSURE AI</h1>

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
                  name="data"
                  id="data"
                  placeholder="Blood pressure rate e.g 90"
                  type="number"
                  onChange={onChange}
                  required
                />
              </Form.Group>
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
                onClick={predictionResults}
              >
                SUBMIT
              </Button>
            </Form>
            <p>{prediction}</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Go Back</p>
            </Link>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AiPage;
