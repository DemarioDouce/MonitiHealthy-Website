import { Container, ListGroup } from "react-bootstrap";
//Load bottom navigation component
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";

function DailyInfoHistoryPage() {
  return (
    <>
      <Container>
        <PatientBottomNavComponent index={2} />
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
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DailyInfoHistoryPage;
