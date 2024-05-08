import "./App.css";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/nav/Navbar";
import { Brocher } from "./components/brocher/Brocher";
import { Footer } from "./components/footer/Footer";
// import  Body  from "./components/Body/body"
import Body from "./components/Body/body";
import { Address } from "./components/address/Address";
import Venue from "./components/venue/Venue";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountdownTimer } from "./assets/CountdownTimer";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <CountdownTimer className="timer" />
      
      <Navbar/>
      {/* <Brocher/> */}
      <Routes>
          <Route path="/venue" element={<Venue />} />
          <Route path="/" element={<Body />} />
      </Routes>
          <Address/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
