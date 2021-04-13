import React, { useState } from "react";
import axios from "axios";
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Form } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

export default function TipsByNurse() {
  // const classes = useStyles();
   const apiUrl = "http://localhost:3000/api/signinnurse";
   const apiUrlSearch = "http://localhost:3000/api/tips-by-nurses";
   const [userName, setUserName] = useState('');
   //const [data, setData] = useState([]);
  // const [dataStudent, setDataStudent] = useState([]);
   const [patients, setPatients] = useState([]);
   let patientSet = []
   const searchData = { auth: { userName } }
 
   //
 
   useEffect(() => {
     const getPatients = async () => {
       await axios.get(apiUrl)
         .then(result => {
           //console.log('result.data:',result.data)
           //check if the user has logged in
           //if(result.data.screen !== 'auth')
           //{
             
             //console.log('data in if:', result.data )
             setData(result.data);
             console.log(userName)
             
             
           //}
         }).catch((error) => {
           console.log('error in fetchData:', error)
         });
         //rowsArray(data);
     };
     //
       getCourses();
       
   }, []);
 
   const onChange = (e) => {
     e.persist();
     setCourseCode(e.target.value)
 
   }
 
   const getPatients = async () => {
     await axios.post(apiUrlSearch,searchData)
       .then(result => {
         //console.log('result.data:',result.data)
         //check if the user has logged in
         //if(result.data.screen !== 'auth')
         //{
           
           //console.log('data in if:', result.data )
           //setData(result.data);
           setDataStudent(result.data)
           console.log(result.data)
           
         //}
       }).catch((error) => {
         console.log('error in fetchData:', error)
       });
       //rowsArray(data);
   };

const SendMotivationalTipsPage = (props) => {
  const fullName = props.location.state.fullName;
  return (
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
          <h3>Send motivational tip to {fullName}</h3>
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
                placeholder="Provide your daily motivational tip to your patient"
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
            <Link to="/all-patient" style={{ textDecoration: "none" }}>
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
  );
};
}

export default SendMotivationalTipsPage;
