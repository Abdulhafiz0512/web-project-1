import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { store } from './store/store';
import ProductsList from './components/ProductList/productList';
import ProductDetails from './components/ProductDetails/ProductDetails'; // Import the ProductDetails component

import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/aside/Sidebar';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Filter from './components/filter/Filter';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import { setBrands, setColors, setProducts } from './store/headphonesSlice';

function App() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
   const location = useLocation()
  useEffect(() => {
    fetch("https://headphones-server.onrender.com/colors")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setColors(data));
      });

    fetch("https://headphones-server.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setBrands(data));
      });

    fetch("https://headphones-server.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Nav />
      
      {location.pathname === '/' && <Hero />} 
      {location.pathname === '/' && <Filter sortBy={sortBy} setSortBy={setSortBy} />} 
      
      <div className="container">
      {location.pathname === '/' && <Sidebar />} 
        <Routes>
          <Route exact path="/" element = {<ProductsList sortBy={sortBy} />} />
          <Route path="/product/:id" element={<ProductDetails></ProductDetails>} />
          
        </Routes>
      </div>
      <Routes>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
