//Load hero image.
import heroBackground from "../img/HeroBackground.jpg";
const HeroComponent = () => {
  return (
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
      <h1
        style={{
          fontSize: "4.5em",
          marginTop: "100px",
          marginBottom: "0px",
        }}
      >
        YOUR HEALTH IS IN YOUR HANDS
      </h1>
    </div>
  );
};

export default HeroComponent;
