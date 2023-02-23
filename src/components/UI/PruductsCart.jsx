

import React from 'react'
//import ProductImg from '../../assets/images/N1.jpg'
import '../../styles/products-cart.css'
import { Col } from 'reactstrap'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const PruductsCart = ({item}) => {
  return (
   
    <Col lg="3" md="4" className= "mb-2" >
     <div className="products__item">
            <div className="products__img">
                <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
            </div>
                 <div className="p-2 product__info">
                  <h3 className="Product__name">
                    <Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span >{item.category}</span>
                    </div>
             <div className="product__Card-bottom d-flet align-items-center
             justify-content-between p-2">
                <span className="price">{item.price} vnđ</span>                   
                     <motion.button  whileTap={{scale: 2}}>
                     <i class="ri-add-line"></i>
                     </motion.button>
             </div>
        </div>
    </Col>
       

    
  );
};
export default PruductsCart