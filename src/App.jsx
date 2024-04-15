import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/nav/Navbar";
import { Brocher } from "./components/brocher/Brocher";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Brocher/>
    <Footer/>

    </div>
  );
}

export default App;
