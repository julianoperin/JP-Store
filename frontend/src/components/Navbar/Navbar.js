import React from "react";
import Navbar from "./Navbar.css";

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
          <Link to="/card"></Link>
        </li>
      </ul>
      {/* hamburger */}
    </nav>
  );
};

export default Navbar;
