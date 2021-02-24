import React from "react";
import "./Navbar.scss";
import { ImCart } from "react-icons/im";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <nav className="navbar">
      {/*//? logo */}
      <div className="navbar__logo">
        <h2>JPstore</h2>
      </div>
      {/*//? links */}
      <div className="cart-link-container">
        <ul className="navbar__links">
          <li
            className="first-li"
            style={{
              background: "#D5E5B5",
              padding: "10px 14px",
              borderRadius: "15px",
              color: "#fff",
            }}
          >
            <Link style={{ color: "#fff" }} className="shop" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="about" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="contact" to="/contact">
              Contact
            </Link>
          </li>

          <li className="cart-btn">
            <Link className="cart-icon" to="/cart">
              <ImCart />
              <span className="cartlogo__badge">{getCartCount()}</span>
            </Link>
          </li>
        </ul>
      </div>

      {/*//? hamburger menu*/}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
