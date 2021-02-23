import React from "react";
import "./CartItem.scss";

import { GrTrash } from "react-icons/gr";

import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          alt="product"
        />
      </div>

      <Link to={`/product/${111}`} className="cartitem__name">
        Product 1
      </Link>

      <p className="cartitem__price">$499.99</p>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="caritem__deleteBtn">
        <GrTrash />
      </button>
    </div>
  );
};

export default CartItem;
