import React from "react";
import "./Navbar.scss";
import { ImCart } from "react-icons/im";

import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2 style={{ fontFamily: "cursive" }}>JPstore</h2>
      </div>
      {/* links */}
      <div className="cart-link-container">
        <ul className="navbar__links">
          <li>
            <Link className="shop" to="/">
              Shop
            </Link>
          </li>
          <li className="cart-btn">
            <Link className="cart-icon" to="/cart">
              <ImCart />
              <span className="cartlogo__badge">0</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* hamburger menu*/}
      <div className="hamburger__menu"></div>
    </nav>
  );
};

export default Navbar;
