
import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";
import authReducer from '../Redux/user/userSlice'
const store = configureStore({
    reducer: {
        cart: CartSlices,
        auth:authReducer
    },
});

export default store;