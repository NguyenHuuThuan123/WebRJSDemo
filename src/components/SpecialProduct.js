import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "../styles/home.css";
const SpecialProduct = (props) => {
  const { product } = props;


  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="products__item">
          <div className="products__img">
            <img src={product.images[0]?.url} className="img-fluid" alt="product" />
          </div>
            <div className="special-product-content">
              <h5 className="brand">{product.brand}</h5>
              <h6 className="title">
                {product.title}
              </h6>
              <p className="price">
                <span className="red-p">$ {product.price}</span> &nbsp;
              </p>

              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
