//Load npm module react-bootstrap.
import { Container } from "react-bootstrap";

//Function to get current year.
let currentYear = () => {
  return new Date().getFullYear();
};
const FooterComponent = () => {
  return (
    <Container>
      <footer
        className="text-center lg"
        style={{
          position: "fixed",
          paddingTop: "10px",
          left: "0",
          bottom: "0",
          width: "100%",
          background: "#fff",
          padding: "8px 0px",
        }}
      >
        <p>© {currentYear()} MonitiHealthy. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default FooterComponent;
