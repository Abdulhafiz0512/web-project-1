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
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Computers from "./components/computers/computers";
import ComputerDetails from "./components/ComputerDetails/ComputerDetails";
import AdminPanel from "./components/admin/AdminPanel";

import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/aside/Sidebar";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import { setBrands, setColors, setProducts } from "./store/headphonesSlice";
import { setComputerBrands, setComputerColors, setComputers } from "./store/computersSlice";
import About from "./components/about/about";
import Sales from "./components/sales/sales";
import New from "./components/new/new";
import Help from "./components/help/help";
import Brands from "./components/brands/brands";

function App() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [
          colorsResponse,
          brandsResponse,
          productsResponse,
          computerColorsResponse,
          computerBrandsResponse,
          computersResponse
        ] = await Promise.all([
          fetch("https://headphones-server.onrender.com/colors"),
          fetch("https://headphones-server.onrender.com/brands"),
          fetch("https://headphones-server.onrender.com/products"),
          fetch("https://headphones-server.onrender.com/computer-colors"),
          fetch("https://headphones-server.onrender.com/computer-brands"),
          fetch("https://headphones-server.onrender.com/computers")
        ]);

        const [
          colorsData,
          brandsData,
          productsData,
          computerColorsData,
          computerBrandsData,
          computersData
        ] = await Promise.all([
          colorsResponse.json(),
          brandsResponse.json(),
          productsResponse.json(),
          computerColorsResponse.json(),
          computerBrandsResponse.json(),
          computersResponse.json()
        ]);

        dispatch(setColors(colorsData));
        dispatch(setBrands(brandsData));
        dispatch(setProducts(productsData));
        dispatch(setComputerColors(computerColorsData));
        dispatch(setComputerBrands(computerBrandsData));
        dispatch(setComputers(computersData));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

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
          <Route
            path="/computers"
            element={<Computers sortBy={sortBy} />}
          />
          <Route
            path="/computer/:id"
            element={<ComputerDetails />}
          />
          <Route
            path="/admin"
            element={<AdminPanel />}
          />
        </Routes>
      </div>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/sales" element={<Sales></Sales>}></Route>
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
