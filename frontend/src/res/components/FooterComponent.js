//Function to get current year.
let currentYear = () => {
  return new Date().getFullYear();
};
const FooterComponent = () => {
  return (
    <footer
      className="text-center lg"
      style={{
        position: "fixed",
        paddingTop: "10px",
        left: "0",
        bottom: "0",
        width: "100%",
        background: "transparent",
        color: "white",
        padding: "8px 0px",
      }}
    >
      <p>© {currentYear()} MonitiHealthy. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
