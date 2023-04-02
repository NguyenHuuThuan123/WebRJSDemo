import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";
import { Container, Row, Col } from 'reactstrap';
import heroimg from '../assets/images/SHome.jpg'; //anh logo home
import Services from '../components/services/Services';
import Clock from "../components/UI/Clock";   
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
//import CounterImg from '../assets/images/CT.png'   <img src={CounterImg} alt="" />
const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;
  const { products } = useSelector((state) => state.products);

    console.log(products);

  const filterProductsByBrand = (products, brand) => {
    const filteredProducts = products?.filter((product) => product?.brand === brand);
    return filteredProducts.length;
  };


  const featuredProducts = products?.filter((product) => product?.tags === "featured")
  .map((product) => (
    <ProductCard key={product?._id} product={product}/>
  ));

  const specialProducts = products?.filter((product) => product?.tags === "special")
  .map((product) => (
    <ProductCard key={product?._id} product={product} />
  ));

  const NArrProducts = products?.filter((product) => product?.brand === "NArr")
  .map((product) => (
    <ProductCard key={product?._id} product={product} />
  ));

 return<Helmet title ={"Home"}> 
    <section className="hero__section"> 
      <Container>
        <Row>
          <Col lg='6' md ='6'>
          <div className="hero__content">
            <p className="hero__subtitle">
              Trending Product in 
            </p>
            <h2>Make your interior More minimalist & Modern</h2>
            <p>Hàng chính hãng- đảm bảo chất lượng cao</p>
                <motion.button whileTap={{scale: 1.2}} 
                className="buy__btn">
                  <Link to ='/shop'>SHOP NOW </Link> </motion.button>
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
            <Col lg='12' className="text-center">
              <h2 className="section__title"> Trending Products</h2>
            </Col>     
            <div  className="row">
            {specialProducts}
             </div>
          </Row>       
        </Container>
      </section>

        <section className="best__sales">
          <Container>
           <Row>
            <Col lg='12' className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>         
            <div  className="row">
            {featuredProducts}
               </div>
            </Row>
          </Container>
        </section>
        
        <section className="timer__count">
          <Container>
          <Row>
            <Col lg='6' md='6' >

               <div className="clock__top-conten">
                  <h4 className="text-while fs-6 mb-2"> Limited Offers</h4>
                  <h3 className="text-while fs-5 mb-3">Quality Socks</h3>
               </div>

              <Clock/>

                  <motion.button whileTap={{scale:2}}  className="store__btn">
                  <Link to='/shop'> Visit Store</Link>
                  </motion.button>
            </Col>
            <Col lg='6' md='6'className="text-end">         
            </Col>
           </Row>
          </Container>
        </section>

        <section className="new__arrival">
          <Container>
            <Row>
              <Col lg="12"  className="text-center">
                <h2 className="section__title"> New Arrivals</h2>
              </Col>
              <div  className="row">
            {NArrProducts}
             </div>
            </Row>
          </Container>
        </section>
        
 </Helmet>;
};

export default Home;