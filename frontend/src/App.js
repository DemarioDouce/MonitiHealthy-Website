//Load FooterComponent component
import FooterComponent from "./res/components/FooterComponent";
//Load hero heroBackground image
import heroBackground from "./res/img/HeroBackground.jpg";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "4.5em",
              marginTop: "100px",
              marginBottom: "0px",
            }}
          >
            YOUR HEALTH IS IN YOUR HANDS
          </h1>
          {/* Login In */}
          <Link to="/patient-login" style={{ textDecoration: "none" }}>
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
            >
              LOGIN
            </Button>
          </Link>
          {/* Sign up */}
          <Link to="/patient-signup" style={{ textDecoration: "none" }}>
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
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default App;
