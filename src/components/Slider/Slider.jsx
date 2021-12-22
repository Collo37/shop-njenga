import sliderLogic from "./sliderLogic";
import SliderButton from "../UI components/SliderButton/SliderButton";
import Slide from "../Slide/Slide";
import "./SliderStyles.css";
import ImageOne from "../../assets/Images/Home_2-Slide_1.png";
import ImageTwo from "../../assets/Images/Home_2-Slide_2.png";
import ImageThree from "../../assets/Images/Home_2-Slide_3.png";
const Slider = () => {
  const { slidesContainer, nextSlide, previousSlide } = sliderLogic();
  return (
    <div className="slider-container">
      <SliderButton direction="left" clicked={previousSlide} />
      <div className="slides-container" ref={slidesContainer}>
        <Slide imageUrl={ImageOne} />
        <Slide imageUrl={ImageTwo} />
        <Slide imageUrl={ImageThree} />
      </div>
      <SliderButton direction="right" clicked={nextSlide} />
    </div>
  );
};

export default Slider;
