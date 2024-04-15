import React, { useState, useEffect } from "react";
import "./App.css";
import { Footer } from "./Footer";
import { Navbar } from "./nav/Navbar";
import { Header } from "./header/Header";
import { Brocher } from "./brocher/Brocher";

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
