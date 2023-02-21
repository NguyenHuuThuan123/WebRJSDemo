import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { Container, Row, Col } from 'reactstrap';
import "../styles/home.css";
import heroimg from '../assets/images/hero-img.png';

import Services from '../services/Services';
const Home = () => {

  const year = new Date().getFullYear()
 return<Helmet title ={"Home"}> 
    <section className="hero__section"> 
      <Container>
        <Row>
          <Col lg='6' md ='6'>
          <div className="hero__content">
            <p className="hero__subtitle">
              Trending Product in {year}
            </p>
            <h2>Make your interior More minimalist & Modern</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Nisi quisquam optio fugit neque maiores in
                nostrum sunt deleniti omnis inventore.</p>
                <motion.button whileTap={{scale: 1.2}} 
                className="buy__btn"><Link to ='/shop'>SHOP NOW
                </Link></motion.button>
          </div>
          </Col>
          <Col lg ='6' md='6'> 
          <div className="hero__img">
            <img src={heroimg}  alt="" /> 
          </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
      <section className="trangding__product">
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section__title"> Trending Product</h2>
            </Col>
          </Row>
        </Container>
      </section>
 </Helmet>;
};

export default Home;