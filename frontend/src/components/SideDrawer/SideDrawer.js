import React from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="cart-link-containerr">
        <ul className="navbar__linkss" onClick={click}>
          <li className="cart-btn">
            <Link className="cart-iconn" to="/cart">
              <ImCart />
              <span className="cartlogo__badgee">{getCartCount()}</span>
            </Link>
          </li>
          <li>
            <Link className="shopp anchor" to="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="about anchor" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="contact anchor" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
