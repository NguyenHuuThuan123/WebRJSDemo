import React, { useEffect } from "react";
import { registerUser } from "../Redux/user/userSlice";
import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import Helmet from '../components/Helmet/Helmet'
import "../styles/checkout.css";
import { useDispatch, useSelector } from "react-redux";
import {Link } from "react-router-dom";
import "../styles/login.css";
import * as yup from "yup";
import { useFormik } from "formik";
import {toast} from 'react-toastify';
import CustomInput from "../components/CustomInput";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
let schema = yup.object().shape({
  firstname: yup.string().required("First name is Required"),
  lastname: yup.string().required("Last  name is Required"),
  email: yup.string().email("Email should be valid").required("Email is Required"),
  mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Number Phone is Required"),
  password: yup.string().required("Password is Required"),
});
const Signup = () => {
  const dispatch = useDispatch();

  const { user, isSuccess, isError } = useSelector((state) => state.auth)


  useEffect(() => {
    if (isSuccess && user) {
      toast.success("Register Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, user]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      mobile: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(registerUser(values));
      console.log(1);
    },
  });


  return (
    <Helmet title ="Signup">
      <section>
        <Container>
          <Row>
            <Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold fs-4">
                  Signup
              </h3>
                <Form action="" className="auth__form " onSubmit={formik.handleSubmit}>

                    <CustomInput type="text"
                  label="Enter Your First Name"
                  id="firstname"
                  name="firstname"
                  onChng={formik.handleChange("firstname")}
                  onBlr={formik.handleBlur("firstname")}
                  val={formik.values.firstname}
                />
                <div className="error mt-2">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>

                <CustomInput type="text"
                  label="Enter Your Last Name"
                  id="lastname"
                  name="lastname"
                  onChng={formik.handleChange("lastname")}
                  onBlr={formik.handleBlur("lastname")}
                  val={formik.values.lastname}
                />
                <div className="error mt-2">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput type="text"
                  label="Enter Your Email Address"
                  id="email"
                  name="email"
                  onChng={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                  val={formik.values.email}
                />
                <div className="error mt-2">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  type="tel"
                  label="Enter your Number Phone"
                  id="mobile"
                  name="mobile"
                  onChng={formik.handleChange("mobile")}
                  onBlr={formik.handleBlur("mobile")}
                  val={formik.values.mobile}
                />
                <div className="error mt-2">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>

                <CustomInput
                  type="password"
                  label="Password"
                  id="password"
                  name="password"
                  onChng={formik.handleChange("password")}
                  onBlr={formik.handleBlur("password")}
                  val={formik.values.password}
                />
                <div className="error mt-2">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">Sign Up</button>
                  </div>
                </div>
                </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup;