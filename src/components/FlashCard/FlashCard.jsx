import FlashCardLogic from "./flashCardLogic";
import Button from "../UI components/Button/Button";
import "./FlashCardStyles.css";

const FlashCard = ({ title, discount, color }) => {
  const { showItem } = FlashCardLogic();

  return (
    <div
      className="flash-card-container"
      style={{
        backgroundColor: color && color,
      }}
    >
      <h3 className="flash-card-details">{title}</h3>
      <h3 className="discount">{`-${discount}%`}</h3>
      <Button title="shop now" color="white" click={() => showItem(title)} />
    </div>
  );
};

export default FlashCard;
