const Button = ({ title, color, click, textColor, large }) => {
  const buttonStyles = {
    width: large ? "100%" : 120,
    height: 40,
    padding: 8,
    borderRadius: "10px",
    backgroundColor: color && color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <div style={buttonStyles} onClick={click}>
      <h5 style={{ color: textColor ? textColor : "orange" }}>{title}</h5>
    </div>
  );
};

export default Button;
