import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../components/UI/CommonSection'
import { Container,Row,Col } from 'reactstrap'

import { motion } from 'framer-motion'
import { cartActions } from "../Redux/slices/CartSlices"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

const cartItems = useSelector(state => state.cart.cartItems);
const totalAmount = useSelector(state => state.cart.totalAmount)
  return <Helmet title ="Cart">
    <CommoSection title="Shopping Cart"/>
      <section>
        <Container>
        <Row>
          <Col lg= '9'>
            {
              cartItems.length === 0 ?(
               <h2 className="fs-4 text-center">No item added to the cart</h2> ) : (
              <table className="table 
              bordered">
                <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Qly</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
                </thead>
                
                <tbody>
                 {
                  cartItems.map((item, index) =>(
                    <Tr item={item} key={index}/>
                  ))}
                </tbody>
              </table>
           ) }        
          </Col>
          <Col lg= '3'>       
                  <div> 
                    <h6 className="d-flex align-items-center justify-content-between ">Subtotal</h6>

                    <span className="fs-1 fw-bold ">{totalAmount} vnd</span>

                  </div>
                  <div>
                    <button className="buy__btn w-100" > <Link to='/shop'> Continue Shopping </Link>

                    </button>            
                  </div>
                  <div>
                  <button className="buy__btn w-100 mt-2" > <Link to='/checkout'> Pay Hear</Link>
                    </button>
                  </div>
          </Col>
        </Row>
        </Container>
      </section>
  </Helmet>
};


const Tr =({item}) =>{
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr >
  <td>
    <img src={item.imgUrl} alt="" />
    </td>
  <td>{item.productName}</td>
  <td>{item.quantity} </td>
  <td>{item.price} vnd</td>

  <td>
    <motion.i whileTap={{scale: 2 }}
    onClick ={deleteProduct}
    class="ri-delete-bin-line">

  </motion.i>
  </td>
  </tr>
}

export default Cart