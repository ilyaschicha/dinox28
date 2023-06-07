import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Presentiation from "./Pages/Presentiation";
import Catalog from "./Pages/Catalog";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/6fc67bdb10.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>

        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentiation" element={<Presentiation />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
