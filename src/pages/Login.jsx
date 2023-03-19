import React, {useState,useEffect} from 'react'
import { loginUser } from "../Redux/user/userSlice";
import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import "../styles/checkout.css";
import { useSelector, useDispatch  } from "react-redux";
import {Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import {toast} from 'react-toastify';
import CustomInput from "../components/CustomInput";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(loginUser(values));
    },
  });

  const authState = useSelector((state) => state);

  const { user, isSuccess } = authState.auth;

  useEffect(() => {
    if (user && isSuccess) {
      // console.log(user);
      window.location.assign("/");
    }
  }, [user, navigate, isSuccess]);

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold fs-4">
                  Login
              </h3>
                <Form  action="" className="auth__form" onSubmit={formik.handleSubmit}>
                <CustomInput type="text"
                  label="Enter Your Email Address"
                  id="email"
                  name="email"
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                  val={formik.values.email}
                />

                    <CustomInput
                  type="password"
                  label="Password"
                  id="password"
                  name="password"
                  onChng={formik.handleChange("password")}
                  onBlr={formik.handleBlur("password")}
                  val={formik.values.password}
                />

                  <button type="submit" className="but__btn auth__btn">Login</button>
                    <p>Create account <Link to='/signup'>hear</Link></p>
                </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login