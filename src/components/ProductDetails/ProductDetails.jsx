import ProductDetailsLogic from "./ProductDetailsLogic";
import Button from "../UI components/Button/Button";
import "./ProductDetailsStyles.css";
import { Favorite } from "@material-ui/icons";

const ProductDetails = ({ product }) => {
  const {
    count,
    countAddedHandler,
    countReducedHandler,
    colorSelectedHandler,
    addToFavorites,
    addItemToCart,
    colors,
  } = ProductDetailsLogic();
  return (
    <div className="product-details">
      <h3 className="product-title">{product.name}</h3>
      <h4 className="product-price">{`Ksh ${product.price}`}</h4>
      <p className="product-description">{product.description}</p>
      <div className="product-colors" ref={colors}>
        <p>Colors Available</p>
        {product.colors &&
          product.colors.map((color, index) => {
            return (
              <div
                className="color"
                key={index}
                onClick={() => colorSelectedHandler(index)}
                style={{ backgroundColor: color.toLowerCase() }}
                value={color}
              />
            );
          })}
      </div>
      <div className="quantity-picker">
        <p>Quantity</p>
        <div className="buttons-container">
          <button onClick={countReducedHandler}>-</button>
          <p className="counter">{count}</p>
          <button onClick={countAddedHandler}>+</button>
        </div>
        <Button
          textColor="white"
          color="orange"
          title="Add to cart"
          click={() => addItemToCart({ ...product, quantity: count })}
        />
        <Favorite
          onClick={() => addToFavorites(product.id)}
          style={{
            color: "#de5212",
            cursor: "pointer",
            marginLeft: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
