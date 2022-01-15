import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../../components/UI components/Button/Button";

import "./cart.css";

const Cart = () => {
  const storedItems = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  let shipping = 300;

  useEffect(() => {
    let initialTotal = 0;
    storedItems.forEach((item) => {
      let subTotal = item.price * item.quantity;
      initialTotal += subTotal;
    });

    setCartItems(storedItems);
    setTotal(initialTotal);
  }, [storedItems]);

  return (
    <div className="cart-container">
      <div className="cart-products-container">
        <h3>Your cart</h3>
        <div className="cart-products">
          {cartItems.length !== 0 ? (
            cartItems.map((cartItem, index) => {
              return (
                <div className="cart-product" key={index}>
                  <div className="cart-product-description">
                    <h2 className="product-name">{cartItem.name}</h2>
                    <p className="subtitle-text">Color: {cartItem.color}</p>
                  </div>
                  <div className="cart-product-amounts">
                    <input
                      type="number"
                      className="cart-product-quantity"
                      defaultValue={cartItem.quantity}
                    />
                    <h2 className="product-total">
                      Ksh: {cartItem.price * cartItem.quantity}
                    </h2>
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              There are no items in your cart. Continue shopping to add more
            </p>
          )}
        </div>
      </div>

      {cartItems.length !== 0 && (
        <div className="cart-products-summary">
          <h2 className="cart-products-title">Summary</h2>
          <div className="product-summary-item">
            <p>Shipping</p>
            <p>{shipping}</p>
          </div>
          <div className="product-summary-item">
            <p>Subtotal</p>
            <p>{cartItems.length !== 0 ? total : 300}</p>
          </div>
          <div className="product-summary-item cart-items-total">
            <p>Total</p>
            <p>{cartItems.length !== 0 ? total + shipping : 300}</p>
          </div>
          <div className="checkout-button-container">
            <Button
              title="Proceed to checkout"
              color="#040409"
              textColor="white"
              large
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
