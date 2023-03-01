import React, { useState,useRef, useEffect } from 'react'
import { Container, Row ,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../components/UI/CommonSection'
import '../styles/products-details.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from "../Redux/slices/CartSlices"
import { toast } from "react-toastify";
const ProductDetail = () => {
    const {id} = useParams(); 
    const product = products.find(item => item.id === id)
    const {imgUrl, price , productName, avgRating, reviews, description,shortDesc }  = product;
    const [tab, setTab] = useState("desc");
    const dispatch  = useDispatch()

    

    const addToCart =()  => {
      dispatch(cartActions.addItem({
        id,
        imgUrl:imgUrl,
        productName,
        price,
      }))
      toast.success('Successfully!!!')
    }

    useEffect(()=>{
      window.scrollTo(0,0);

    }, [product]);

  return <Helmet title ={productName}>
    <CommoSection title ={productName }/>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='4'>
              <img src={imgUrl} alt=""/> 
            </Col>     
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName} </h2>
                <div className="product__rating 
                d-flex align-items-center gap-5 mb-6">
                    <div>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-half-s-fill"></i></span>
                    </div>
                    <p>
                      <span> ({avgRating} ) </span> Ratings </p>
              </div>

              <span className="products__price" > {price} vnđ</span>
              <p className='mt-2'> {shortDesc}</p>
              <motion.button whileTap={{scale: 2}} className="buy__btn" onClick={addToCart}>
                Add to Cart
              </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
          <Container>
            <Row>
              <Col lg='12'>
                
                <div className="tab__wrapper d-flex align-items-center gap-5">
                    <h6 className= {`${tab === "desc"  ? "active__tab" : ""}`}
                    onClick= {() => setTab("desc") }>
                        Description</h6>
                        
                    <h6 className= {`${tab === "rev" ? "active__tab" : ""}`}
                      onClick= {() => setTab("rev") }> 
                         Reviews ({reviews.length}) 
                            
                    </h6>                  
                </div>
                
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>

              </Col>
            </Row>
          </Container>
        </section>




  </Helmet>
};

export default ProductDetail