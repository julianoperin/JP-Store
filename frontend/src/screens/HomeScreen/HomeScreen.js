import React, { useEffect } from "react";
import "./HomeScreen.scss";
import { useSelector, useDispatch } from "react-redux";

//! Components
import Product from "../../components/Product/Product.js";
import NewsLetter from "../../components/NewsLetter/NewsLetter.js";

//! Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <NewsLetter />
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="greenLine"></div>

      <div className="homescreen__products">
        {loading ? (
          <h2>Loading</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
