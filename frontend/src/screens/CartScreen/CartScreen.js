import React, { useEffect } from "react";
import "./CartScreen.scss";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//! Components
import CartItem from "../../components/CartItem/CartItem.js";

//! Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back to Products</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
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
