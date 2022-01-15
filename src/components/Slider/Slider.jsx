import sliderLogic from "./sliderLogic";

import Slide from "../Slide/Slide";
import SliderButton from "../UI components/SliderButton/SliderButton";

import ImageOne from "../../assets/Images/Home_2-Slide_1.jpg";
import ImageTwo from "../../assets/Images/Home_2-Slide_2.jpg";
import ImageThree from "../../assets/Images/Home_2-Slide_3.jpg";

import "./SliderStyles.css";

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
