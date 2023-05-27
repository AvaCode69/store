import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<SingleProduct />} />

        {/* <Route exact path="/products/:id" children={<SingleProduct />} /> */}
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
