import React, { useState, useEffect } from "react";
import "./App.css";
import conferenceImage from "./assets/conferenceImage.png";
import header from "./assets/header.png";
import igc from "./assets/igc.png";
import { Footer } from "./Footer";
// import { CountdownTimer } from './CountdownTimer';


const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    const difference = +new Date(`${2025}-12-19`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="Countdown">
      {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes
      : {timeLeft.seconds} Seconds
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <h3>INDIAN GEOTECHNICAL CONFERENCE 2025 </h3>
            <img src={igc} alt="" />
          </div>
          <p>
            Geotechnical Engineering for a Sustainable Tomorrow (IGEST 2025)
          </p>
          <p>
            Dec. 19-21, Dec 2025 | Department of Civil Engineering, NIT,
            Jalandhar (Punjab) - India
          </p>
        </div>
        {/* <img src={header} alt="" /> */}
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Speakers</li>
        </ul>
      </nav>
      <div className="Header" style={{ backgroundImage: `url(${conferenceImage})` }}>
        <div className="">
          <h1 className="in-header">INDIAN GEOTECHNICAL CONFERENCE 2025 </h1>
          <button>REGISTRATION</button>
          <button>BROCHURE</button>

        </div>
        <CountdownTimer />
      </div>
    <Footer/>

    </div>
  );
}

export default App;
