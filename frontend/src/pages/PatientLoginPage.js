//Load components
import FooterComponent from "../res/components/FooterComponent";
//Load @material-ui/core package
import { Button, Container, TextField } from "@material-ui/core";

const PatientLoginPage = () => {
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
            <form>
              {/* Email */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {/* Password */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <Button
                style={{
                  color: "#0d6efd",
                  padding: "10px 30px",
                  fontSize: "16px",
                  backgroundColor: "#fff",
                  border: "2px solid #0d6efd",
                }}
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                LOGIN
              </Button>
            </form>
            <FooterComponent />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientLoginPage;
