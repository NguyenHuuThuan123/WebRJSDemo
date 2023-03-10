

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuatitty:0,
}

const CartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  addItem:(state,action) => {
    const newItem = action.payload
    const existingItem = state.cartItems.find(item => item.id ===
        newItem.id
        );

        state.totalQuatitty++

        if(!existingItem){
            state.cartItems.push({    

            id: newItem.id,
            productName: newItem.productName,
            imgUrl: newItem.imgUrl,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price
        })
        }
        else{
            existingItem.quantity++
            existingItem.totalPrice = 
            Number(existingItem.totalPrice) + Number ( newItem.price);
        }

        state.totalAmount = state.cartItems.reduce(
            (total, item) => total+ Number(item.price) * Number(item.quantity),0
            );

        console.log(state.totalQuatitty);
        console.log(state.cartItems);
         console.log(newItem);
    },
      //deleta item
  deleteItem: (state, action) => {
    const id= action.payload
    const existingItem = state.cartItems.find(item=>item.id === id )
    if(existingItem){
        state.cartItems= state.cartItems.filter(item => item.id !== id )
        state.totalQuatitty = state.totalQuatitty - existingItem.quantity
    }
    state.totalAmount = state.cartItems.reduce(
        (total, item) => total+ Number(item.price) * Number(item.quantity),0
        );
  }
  },

});

export const cartActions = CartSlices.actions;

export default CartSlices.reducer;