import React, { useState, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { store } from "./store/store";
import ProductsList from "./components/ProductList/productList";
import ProductDetails from "./components/ProductDetails/ProductDetails"; // Import the ProductDetails component

import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/aside/Sidebar";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import { setBrands, setColors, setProducts } from "./store/headphonesSlice";
import About from "./components/about/about";
import Sales from "./components/sales/sales";
import New from "./components/new/new";
import Help from "./components/help/help";
import Brands from "./components/brands/brands";

function App() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const location = useLocation();
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

      {location.pathname === "/" && <Hero />}
      {location.pathname === "/" && (
        <Filter sortBy={sortBy} setSortBy={setSortBy} />
      )}

      <div className="container">
        {location.pathname === "/" && <Sidebar />}
        <Routes>
          <Route exact path="/" element={<ProductsList sortBy={sortBy} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          />
        </Routes>
      </div>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        {/*<Route path="/sales" element={<Sales></Sales>}></Route>*/}
        <Route path="/new" element={<New></New>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
        <Route path="/brands" element={<Brands></Brands>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
