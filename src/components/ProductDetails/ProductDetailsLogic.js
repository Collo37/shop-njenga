import { useState, useRef } from "react";

const ProductDetailsLogic = () => {
  const [count, setCount] = useState(0);
  const colors = useRef();

  const colorSelectedHandler = (index) => {
    for (let i = 1; i < colors.current.children.length; i++) {
      colors.current.children[i].classList.remove("selected-color");
      colors.current.children[index + 1].classList.add("selected-color");
    }
    colors.current.children[index + 1].classList.add("selected-color");
  };
  const countAddedHandler = () => {
    setCount(count + 1);
  };

  const countReducedHandler = () => {
    count > 0 && setCount(count - 1);
  };

  const addToCart = (id) => {
    console.log(id, " was added to cart successfully");
  };
  const addToFavorites = (id) => {
    console.log(id, " was added to Favorites");
  };

  return {
    count,
    countAddedHandler,
    countReducedHandler,
    colors,
    colorSelectedHandler,
    addToCart,
    addToFavorites,
  };
};

export default ProductDetailsLogic;
