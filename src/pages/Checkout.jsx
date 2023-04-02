import React, { useEffect, useState } from "react";
import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch,  } from "react-redux";
import { applyCoupon, createOrder, getaUserCart } from "../Redux/user/userSlice";
import { debounce } from 'lodash';
const Checkout = () => {

  const [coupon, setCoupon] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [phone, setPhone] = useState("");
  const { orders, userinfo } = useSelector((state) => state.auth);
  const shipChart = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userinfo?.user) {
      setName(userinfo?.user?.lastname + " " + userinfo?.user?.firstname);
      setAddress(userinfo?.user.address);
      setPhone(userinfo?.user.mobile);
    }
  }, [userinfo?.user])

  const handleApplyCoupon = () => {
    const value = {
      coupon: coupon
    }
    dispatch(applyCoupon(value));
    setTimeout(() => {
      dispatch(getaUserCart());
    }, 5000)
  }

  const handlePayment = () => {
    const values = {
      COD: true,
      couponApplied: orders?.isDiscount,
      note: note || "",
      address: address || "",
      sendTo: name,
      phone: phone
    }
    // console.log(value);
    dispatch(createOrder(values))
  }


  
  return <Helmet title= "Çheckout">
      <CommonSection title= "Çheckout"/>
    <section>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Nguyen Huu Thuan (huuthuan@gmail.com) 
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="NumberPhone"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {orders &&
                orders?.products?.map((product, index) => (
                  <div className="d-flex gap-10 mb-2 align-align-items-center" key={index}>
                    <div className="w-75 d-flex gap-10">

                      <div className="w-25 position-relative">
                        <span
                          style={{ top: "-10px", right: "2px" }}
                          className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                        >
                          {`${product?.count}`}
                        </span>
                        <img className="img-fluid" src={product?.images[1]?.url || ""} alt="product" />
                      </div>
                      <div>
                        <h5 className="total-price">Total price</h5>
                        <p className="total-price">$ {`${product?.price}`}</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">$ {`${product?.price * product?.count}`}</h5>
                    </div>
                  </div>
                ))}

            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ {`${orders?.cartTotal}`}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ {`${shipChart}`}</p>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ {`${orders?.cartTotal + shipChart}`}</h5>
            </div>
           <Link onClick={handlePayment} className="button " style={{ marginLeft: "400px" }}>
              Payment
            </Link>
            
          </div>      
        </div>
      </Container>
    </section>
  </Helmet>
}

export default Checkout