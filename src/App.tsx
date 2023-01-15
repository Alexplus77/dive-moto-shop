import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import { PopularProducts } from "./Components/PopularProducts";
import { Catalog } from "./Components/Catalog";
import { Search } from "./Components/Search";
import { SliderPromo } from "./Components/SliderPromo";
import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
