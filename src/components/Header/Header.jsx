import React,{useRef, useEffect} from 'react'
import './header.css'
import{motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
  

]


const Header = () => {

    const headerRef = useRef(null); //header cuon trang
    const totalQuantify = useSelector((state)=> state.cart.totalQuantify) // icon quality cart
    const menuRef = useRef(null); //menu home 
    

    const stickyHeaderFunc =() => {
      window.addEventListener('scroll',  ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80)
        {
          headerRef.current.classList.add('sticky__header')
        } else {
          headerRef.current.classList.remove('sticky__header')
        }
        
      })
    }


    useEffect (()=>{
        stickyHeaderFunc();

        return() => window.removeEventListener("scroll", stickyHeaderFunc);
        
    });

      const mennuToggle = () => menuRef.current.classList.toggle('active__menu') //menu home



  return (
  <header className="header" ref={headerRef}>
    <Container>
    <Row>
      <div className="nav__wrapper">
        <div className="logo">
          <img src= {logo} alt="logo" />
          <div>
            <h1>Multimart</h1>
          </div>
        </div>
        <div className="navigation" ref={menuRef} onClick= {mennuToggle}>
            <ul className='menu'>
                {
                  nav__links.map((item,index) => (
                    <li className="nav__item" key={index} >
                      <NavLink to={item.path} className={(navClass)=>
                         navClass.isActive ? 'nav__active' : ''} >{item.display}
                      </NavLink>
                    </li>
                  ))
                }
            </ul>
        </div>

    <div className="nav__icons">

          <span className="fav__icon">
            <i class="ri-heart-2-line"></i>
            <span className="badge">0</span>
          </span>
          
          <span className="cart__icons">
            <i class="ri-shopping-bag-line"></i>
            <span className="badge">0{totalQuantify}</span>       
          </span>

            <span >
              <motion.img whileTap={{ scale: 1.2 }} src={userIcon} 
               alt=""/>
            </span>

            <div className="mobile__menu">
            <span onClick={mennuToggle} >
              <i class="ri-menu-add-line"></i>
            </span>
          </div>
      </div>        
      </div>
    </Row>
    </Container>

  </header>
  )
}

export default Header