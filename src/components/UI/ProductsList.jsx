
import React from 'react';
import ProductsCart from "./PruductsCart";
const ProductsList = ({data}) => {
  return (
    <>
    {
        data ?.map((item) => (
            <ProductsCart item ={item}/>
        ))
    }
     
        
    </>
  );    
};

export default ProductsList;