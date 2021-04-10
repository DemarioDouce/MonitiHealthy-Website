import { Container, ListGroup } from "react-bootstrap";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";

function AlertHistoryPage() {
  return (
    <>
      <Container>
        <PatientBottomNavComponent index={5} />
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
    </>
  );
}

export default AlertHistoryPage;
