import React from "react";
import "./CartScreen.scss";

import CartItem from "../../components/CartItem/CartItem.js";

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>$678</p>
        </div>
        <div>
          <button className="proceed" type="button">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
