import FlashCard from "../FlashCard/FlashCard";
import { cards } from "../../data/cards";
import { colors } from "../../Constants/colors";
import "./FlashCardContainerStyles.css";

const FlashCardContainer = () => {
  const flashColors = colors.accentColors;
  return (
    <div className="flashcard-container">
      {cards.map((card, index) => {
        return (
          <FlashCard
            title={card.title}
            discount={card.discount}
            color={flashColors[index]}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FlashCardContainer;
