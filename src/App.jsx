import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <Navbar />
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/help" element={<Help />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
