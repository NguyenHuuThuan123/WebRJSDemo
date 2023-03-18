import React, {useState} from 'react'

import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";
import "../styles/login.css";

import {toast} from 'react-toastify';



const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')

  return (
    <Helmet title ="Signup">
      <section>
        <Container>
          <Row>
            <Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold fs-4">
                  Signup
              </h3>
                <Form className="auth__form " onSubmit={Signup}>
                  <FormGroup className="form__group">
                  <input type="text" placeholder="UserName" 
                  value={username} onChange={e => setUsername(e.target.value)}/>
                  </FormGroup>

                  <FormGroup className="form__group">
                  <input type="email" placeholder="your email" 
                  value={email} onChange={e => setEmail(e.target.value)}/>
                  </FormGroup>

                  <FormGroup className="form__group">
                  <input type="password" placeholder="your password"
                   value={password} onChange={e => setPassword(e.target.value)} />
                  </FormGroup>

                  <FormGroup className="form__group">
                  <input type="file" 
                   onChange={e => setPassword(e.target.files[0])} />
                  </FormGroup>

                  <button type="submit" className="but__btn auth__btn">Create account</button>
                    <p>Create account <Link to='/login'>hear</Link></p>
                </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup;