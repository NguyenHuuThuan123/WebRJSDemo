import React, {useEffect, useState} from 'react'
 import CommoSection from '../components/UI/CommonSection'
 import Helmet from '../components/Helmet/Helmet'
 import { Container, Row, Col } from 'reactstrap';
 import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'antd';
import useSelection from 'antd/es/table/hooks/useSelection';
import ProductCard from "../components/ProductCard";
import { getProductCategory, getProductinStock, getProductoutStock, getProductPrice, getProductPriceFrom, getProductPriceTo, getProducts, getProductTags } from "../Redux/product/productSlice";
import { debounce } from 'lodash';
import ReactPaginate from "react-paginate";

const Shop = () => {
  const dispatch = useDispatch();
  // Value of price from -> to
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [grid, setGrid] = useState(4);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);


  const { products } = useSelector((state) => state.products);

  

  const handleInputFrom = debounce((value) => {
    setPriceFrom(value);
  }, 500)

  const handleInputTo = debounce((value) => {
    setPriceTo(value);
  }, 500)

  const handleChangeInStock = (event) => {
    setIsCheckedIn(event.target.checked);
    if (!isCheckedIn) {
      dispatch(getProductinStock());
    } else {
      dispatch(getProducts());
    }
  }

  const handleChangeOutStock = (event) => {
    setIsCheckedOut(event.target.checked);
    if (!isCheckedOut) {
      dispatch(getProductoutStock());
    } else {
      dispatch(getProducts());
    }
  }

  useEffect(() => {
    if (priceFrom && priceTo) {
      const values = {
        from: priceFrom,
        to: priceTo,
      }
      dispatch(getProductPrice(values));
    } else if (priceTo) {
      dispatch(getProductPriceTo(priceTo));
    } else if (priceFrom) {
      dispatch(getProductPriceFrom(priceFrom));
    }
  }, [priceFrom, priceTo, dispatch])


  const handleGetCategory = (category) => {
    dispatch(getProductCategory(category))
  }

  const handleGetTags = (tags) => {
    dispatch(getProductTags(tags))
  }

  const featuredProducts = products
    .filter((product) => product.tags === "featured")
    .map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  // const sort = products
  //   .filter((product) => product.tags === "featured")
  //   .sort((a, b) => a.name.localeCompare(b.name)) // Sắp xếp theo tên từ a đến z
  //   .map((product) => (
  //     <ProductCard key={product.id} grid={grid} product={product} />
  //   ));
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

  return  <Helmet title='Shop'>
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
      {products
                  
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
      </Row>
    </Container>
  </section>
</Helmet>
};

export default Shop