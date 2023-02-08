import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/Header";
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
