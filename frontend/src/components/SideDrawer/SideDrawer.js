import React from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="cart-link-containerr">
        <ul className="navbar__linkss" onClick={click}>
          <li className="cart-btn">
            <Link className="cart-iconn" to="/cart">
              <ImCart />
              <span className="cartlogo__badgee">0</span>
            </Link>
          </li>
          <li>
            <Link className="shopp" to="/">
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
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
