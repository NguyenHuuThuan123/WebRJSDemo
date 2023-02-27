import React from 'react'
import { Container, Row ,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommoSection from '../components/UI/CommonSection'
    
const ProductDetail = () => {
    const{id} = useParams()
    const product = products.find(item => item.id === id)
    const {imgUrl, price , productName, avgRating, review, description }  = product;

  return <Helmet>
    <CommoSection>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt=""/> 
            </Col>       
            <Col lg='6'>
            </Col>
          </Row>
        </Container>
      </section>
    </CommoSection>
  </Helmet>
}

export default ProductDetail