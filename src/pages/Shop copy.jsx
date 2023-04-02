import React, {useEffect, useState} from 'react'
 import CommoSection from '../components/UI/CommonSection'
 import Helmet from '../components/Helmet/Helmet'
 import { Container, Row, Col } from 'reactstrap';
 import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/product/productSlice';
import { Grid } from 'antd';
import useSelection from 'antd/es/table/hooks/useSelection';
  const Shop = () => {

  const[productsData,setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;


     if(filterValue === "NIKE"){
      const filteredProduct = products.filter(
        (item) => item.category === "NIKE"  
      );
     setProductData(filteredProduct);
    
  }

  if(filterValue === "ADD"){
    const filteredProduct = products.filter(
      (item) => item.category === "ADD"  
    );
   setProductData(filteredProduct);
  
}

if(filterValue === "NArr"){
  const filteredProduct = products.filter(
    (item) => item.category === "NArr"  
  );
 setProductData(filteredProduct);

}



}; // search list

//search name
  const handleSearch = e => {
    const searchTerm = e.target.value
    const searchedProducts  =   products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductData(searchedProducts)
  }


  const productSate = useSelector((state) => state);
  console.log(productSate);
  
  const dispath = useDispatch();
  useEffect(()=> {
    getProduct();
  },[]);
  const getProduct =() => {
      dispath(getProducts());
  };


  return <Helmet title='Shop'>
    <CommoSection title=' '/>
    <section className="filter__shop" >
      <Container>
        <Row>
          
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
              <option>Filter by category</option>
                <option value="NIKE">Nike</option>
                <option value="ADD">Adidas</option>
                <option value="NArr">new arri</option>
                <option value="NIKE">Nike</option>
              </select>
            </div>
          </Col>

          <Col lg='3' md='6'>
          <div className="filter__widget" >
              <select >
              <option>Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Desending</option>
              </select>
            </div>
          </Col>
          
          <Col lg='6' md='12'>
          <div className="search__box">          
                <input type ="text" placeholder="Search......"
                 onChange={handleSearch}></input>        
                <span> 
                  <i class="ri-search-eye-line"></i>
                </span>     
            </div>
          </Col>
        </Row>
      </Container>

    </section>

    <section className='pt-0'> 
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className="text-center fs-4">No products are found! </h1>
            : <ProductsList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Shop