import React from "react";
import "./CartItem.scss";

import { GrTrash } from "react-icons/gr";

import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      <Link to={`/product/${item.product}`} className="cartitem__name">
        {item.name}
      </Link>

      <p className="cartitem__price">${item.price}</p>

      <select
        className="cartitem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="caritem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <GrTrash />
      </button>
    </div>
  );
};

export default CartItem;
