//Load npm module react-bootstrap.
import { Card } from "react-bootstrap";
//Load hero image.
import heroBackground from "../img/hero-background.jpg";
const HeroComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBackground})`,
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Card
        className="text-center"
        style={{
          width: "21rem",
          background: "#0d6efd",
          color: "white",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "5px",
          paddingRight: "5px",
          right: "-50px",
          bottom: "-90px",
        }}
      >
        <Card.Title>YOUR HEALTH IS IN YOUR HANDS</Card.Title>
      </Card>
    </div>
  );
};

export default HeroComponent;
