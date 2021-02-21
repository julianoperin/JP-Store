import React from "react";
import "./Navbar.scss";
import { ImCart } from "react-icons/im";

import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* logo */}
      <div className="navbar__logo">
        <h2 style={{ fontFamily: "cursive" }}>JPstore</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            <ImCart />
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/* hamburger menu*/}
      <div className="hamburger__menu"></div>
    </nav>
  );
};

export default Navbar;
