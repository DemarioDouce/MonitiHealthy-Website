//Load components
import FooterComponent from "../res/components/FooterComponent";
//Load @material-ui/core package
import { Button, Container, TextField } from "@material-ui/core";

const NurseLoginPage = () => {
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
            <h1>LOGIN</h1>
            <h1>Hello world!</h1>
            <FooterComponent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default NurseLoginPage;
