import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Products,
  Gallery,
  AppSection,
  Products_2,
  Cards,
  Forms,
  Footer
} from "./components/index.js";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Products />
      <Gallery />
      <AppSection />
      <Products_2 />
      <Cards />
      <Forms />
      <Footer />
    </Router>
  );
}

export default App;
