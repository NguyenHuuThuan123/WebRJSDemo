import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import view from "../images/view.svg";
import { addtoCart, getWishList } from "../Redux/user/userSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const ProductCard = (props) => {
  const { grid, product } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);



  const handleAddtoCart = (e) => {
    e.preventDefault();
    const values = {
      cart: [
        {
          _id: product?._id,
          count: 1,
          color: "Black"
        }
      ]
    }
    dispatch(addtoCart(values));
  }

  console.log(product);
  return (
    <>
      <div
        className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"
          } `}
      >
        <Link
          to={
            location.pathname === "/"
              ? `/product/${product._id}`
              : `/product/${product._id}`
          }
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
          </div>
          <div className="products__img">
            <img src={product.images[0]?.url} className="img-fluid" alt="product"   onClick={(e) => handleAddtoCart(e)}/>
          </div>
          <div className="product-details">
            <h6 className="brand">{`${product.brand}`}</h6>
            <h5 className="product-title">
              {`${product.title}`}
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {`${product.description}`}
            </p>
            <p className="price">{`$ ${product.price}`}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">        
                    <motion.button  whileTap={{scale: 2}} onClick={(e) => handleAddtoCart(e)}>
                     <i class="ri-add-line"></i>
                     </motion.button>
              
            </div>
          </div>
        </Link>
      </div>

    </>
  );
};

export default ProductCard;
