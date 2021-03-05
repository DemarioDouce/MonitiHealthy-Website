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
        className="text-center"
        style={{ position: "fixed", left: "0", bottom: "0", width: "100%" }}
      >
        <p>© {currentYear()} MonitiHealthy. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default FooterComponent;
