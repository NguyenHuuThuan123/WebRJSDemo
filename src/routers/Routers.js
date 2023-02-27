import { Routes, Route, Navigate } from 'react-router-dom'



import Home from '../pages/Home'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Signup from '../pages/Signup'


const Routers = () => {
  return <Routes>

    <Route path='/' element={<Navigate to="home"/>}/>
    <Route path='home' element ={<Home/>}/>
    <Route path='shop' element ={<Shop/>}/>
    <Route path='shop/:id' element ={<ProductDetail/>}/>
    <Route path='cart' element ={<Cart/>}/>
    <Route path='login' element ={<Login/>}/>
    <Route path='signup' element ={<Signup/>}/>
    <Route path='checkout' element ={<Checkout/>}/>
  </Routes>
};

export default Routers