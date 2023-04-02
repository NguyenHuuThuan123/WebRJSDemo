
import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";
import authReducer from '../Redux/user/userSlice'
import productReducer from "../Redux/product/productSlice";
import counterReducer from '../Redux/counter/counterSlice';

const store = configureStore({
    reducer: {
        cart: CartSlices,
        auth:authReducer,
        products: productReducer,
        counter: counterReducer,
    },
});

export default store;