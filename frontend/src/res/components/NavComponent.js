//Load npm module react-bootstrap.
import { Container, Navbar, Nav, Button } from "react-bootstrap";
//Load favicon image.
import favicon from "../img/Favicon.png";
const NavComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={favicon}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="MonitiHealthy favicon icon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          style={{ marginLeft: "5px", marginRight: "5px" }}
          className="justify-content-end"
          variant="primary"
        >
          LOGIN
        </Button>
        <Button
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            background: "#fff",
            color: "#0d6efd",
            border: "2px solid #0d6efd",
          }}
          className="justify-content-end"
          variant="dark"
        >
          SIGNUP
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
