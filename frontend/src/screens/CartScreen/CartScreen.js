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

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2 className="title-cart">Shopping Cart</h2>
        <div className="greenLine"></div>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back to Products</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>
            <b>Total Items:</b>
            <span className="total-amount"> {getCartCount()} </span>
          </p>
          <p>
            {" "}
            <b>Total Price:</b>{" "}
            <span className="total-price">
              {" "}
              ${getCartSubTotal().toFixed(2)}
            </span>
          </p>
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
