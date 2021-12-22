import { useState, useRef } from "react";

const SliderLogic = () => {
  const slidesContainer = useRef();
  const [counter, setCounter] = useState(0);
  const nextSlide = () => {
    setCounter(counter + 1);
    if (counter < 3) {
      setCounter(counter + 1);
      slidesContainer.current.style.left = `-${100 * counter}%`;
    } else {
      setCounter(1);
      slidesContainer.current.style.left = "0";
    }
  };

  const previousSlide = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      slidesContainer.current.style.left = `-${100 * counter}%`;
    } else {
      setCounter(2);
      slidesContainer.current.style.left = `-${100 * counter}%`;
    }
  };
  return {
    slidesContainer,
    nextSlide,
    previousSlide,
  };
};

export default SliderLogic;
