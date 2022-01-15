import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../state/cartSlice";

const ProductDetailsLogic = () => {
  const [count, setCount] = useState(0);
  const [productColor, setProductColor] = useState(null);
  const colors = useRef();
  const dispatch = useDispatch();

  const colorSelectedHandler = (index) => {
    let color;
    for (let i = 1; i < colors.current.children.length; i++) {
      color = colors.current.children[index + 1].style.backgroundColor;
      colors.current.children[i].classList.remove("selected-color");
      colors.current.children[index + 1].classList.add("selected-color");
    }
    colors.current.children[index + 1].classList.add("selected-color");
    setProductColor(color);
  };
  const countAddedHandler = () => {
    setCount(count + 1);
  };

  const countReducedHandler = () => {
    count > 0 && setCount(count - 1);
  };

  const addItemToCart = (product) => {
    dispatch(
      addToCart({
        cartItem: {
          ...product,
          color: productColor ? productColor : product.colors[0],
        },
      })
    );
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
    addItemToCart,
    addToFavorites,
  };
};

export default ProductDetailsLogic;
