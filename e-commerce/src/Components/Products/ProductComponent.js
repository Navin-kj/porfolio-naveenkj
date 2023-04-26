import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/style.css";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title } = products[0];
  return (
    <div className="card-main">
      {products.map((prod) => {
        return (
          <div className="card-design">
            <img src={prod.image} alt={prod.title} className="image1" />
            <div className="container">
              <div className="header">{prod.title}</div>
              <div className="meta-price">$ {prod.price}</div>
              <div className="meta">{prod.category}</div>
            </div>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
