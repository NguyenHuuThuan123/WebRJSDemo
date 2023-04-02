import React from 'react'
import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import "../styles/checkout.css";
import { useSelector } from "react-redux";
const Checkout = () => {


  const totalQty = useSelector(state => state.cart.totalQuatitty)
  const totalAmount =  useSelector(state => state.cart.totalAmount)
  
  return <Helmet title= "Çheckout">
      <CommonSection title= "Çheckout"/>
    <section>
      <Container>
        <Row>
          <Col lg='7'>
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Form className="billing__form">
                <FormGroup className="form__group">
                    <input type="name" placeholder="your name" />
                </FormGroup>

                <FormGroup className="form__group ">
                    <input type="email" placeholder="your email"/>
                </FormGroup>

                <FormGroup className="form__group">
                    <input type="number" placeholder=" your phone"/>
                </FormGroup>
              
                <FormGroup className="form__group">
                    <input type="address" placeholder=" your address"/>
                </FormGroup>
            </Form>
          </Col>

          <Col lg="4">
            <div className="checkout__Cart">
              <h6>
                Total Qty: <span>{totalQty} </span>
              </h6>
              <h6>
               Subtotal: <span>{totalAmount }</span>
              </h6>

                <button className="buy__btn auth__btn">Place an Order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout