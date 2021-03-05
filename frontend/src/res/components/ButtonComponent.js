const ButtonComponent = ({ title, colorBackground, onClick, textColor }) => {
  return (
    <>
      <button
        style={{
          border: "none",
          color: `${textColor}`,
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "10px 10px",
          cursor: "pointer",
          backgroundColor: `${colorBackground}`,
          border: "2px solid #0d6efd",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default ButtonComponent;
