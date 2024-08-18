
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, ...product } = action.payload.pr;
      const existingProduct = state.cartItems.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.quantity = action.payload.quan;
      } else {
        state.cartItems.push({ ...product, id, quantity: action.payload.quan }); 
      }
    

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(x => x.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cart');
    },
    incrementQuantity: (state, action) => {
        const  id  = action.payload;
        const existingProduct = state.cartItems.find(item => item.id == id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems)); 
      },
    decrementQuantity: (state, action) => {
        const  id  = action.payload;
        const existingProduct = state.cartItems.find(item => item.id == id);
        if (existingProduct && existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems)); 
      }
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
