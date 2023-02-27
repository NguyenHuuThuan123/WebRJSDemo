import React from 'react'
import './footer.css'
import { Container, Row, Col,ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year =  new Date().getFullYear()
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col lg="4">  
        <div className="logo">       
          <div>
          <h1 className="text-white"> </h1>
          </div>
        </div>
        <p className="footer__text mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Fuga fugiat nisi voluptates exercitationem recusandae, 
             voluptas deleniti iusto natus laudantium quidem?
          </p>
        </Col>

        <Col lg="3">  
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top categories </h4>
            <ListGroup className="mb-2">
              <ListGroupItem className="ps 0 border-0 d-flex align-items-center gap-2"> 
                <Link to='#'> Nike Socks</Link>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem  className="ps 0 border-0 d-flex align-items-center gap-2"> 
                <Link to='#'> Adiddas Socks</Link>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem  className="ps 0 border-0 d-flex align-items-center gap-2"> 
                <Link to='#'> Puma Socks</Link>
              </ListGroupItem>
            </ListGroup>
            
            <ListGroup>
              <ListGroupItem  className="ps 0 border-0"> 
                <Link to='#'> Bitis Socks</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg="2">
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup className="mb-2">
              <ListGroupItem className="ps 0 border-0"> 
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem  className="ps 0 border-0 "> 
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem  className="ps 0 border-0"> 
                <Link to='/login'>Login</Link>
              </ListGroupItem>
            </ListGroup>
            
            <ListGroup>
              <ListGroupItem  className="ps 0 border-0"> 
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
          
      
        </Col>

        <Col lg="3"> 
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup className="footer__contact">
              <ListGroupItem className="ps 0 border-0"> 
              <span> <i class="ri-map-pin-fill"></i> </span>
              <p>Ký Túc xá đại hoc quốc gia khu b,Linh Trung-Thủ Đức</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup  className="footer__contact">
              <ListGroupItem  className="ps 0 border-0"> 
              <span> <i class="ri-phone-fill"></i> </span>
              <p>0968686868</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup  className="footer__contact">
              <ListGroupItem  className="ps 0 border-0"> 
              <span> <i class="ri-mail-fill"></i> </span>
              <p>huuthuan170003@gmail.com</p>
              </ListGroupItem>
            </ListGroup>        
          </div>
         </Col>

            <Col lg="12">
              <p className="footer__copyright"> 
                  Copyright {year} developed by team T2
              </p>
            </Col>
      </Row>
    </Container>
  </footer>
  );
}

export default Footer