import { ArrowBack, ArrowForward } from "@material-ui/icons";

const SliderButton = ({ direction, clicked }) => {
  const styles = {
    color: "orange",
    position: "absolute",
    top: "50%",
    left: direction === "left" && "10px",
    right: direction !== "left" && "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 10,
  };
  return direction === "left" ? (
    <ArrowBack style={styles} onClick={clicked} />
  ) : (
    <ArrowForward style={styles} onClick={clicked} />
  );
};

export default SliderButton;
