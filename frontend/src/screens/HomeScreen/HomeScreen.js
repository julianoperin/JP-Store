import React, { useEffect } from "react";
import "./HomeScreen.scss";
import { useSelector, useDispatch } from "react-redux";

//! Components
import Product from "../../components/Product/Product.js";

//! Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
    // console.log(state.getProducts);
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homescreen__products"></div>
    </div>
  );
};

export default HomeScreen;
