import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMoving(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleHover = (isHovering) => {
    setIsMoving(!isHovering);
  };

  return (
    <div className="bg-cyan-700">
      <div
        className={`flex justify-between items-center py-4 px-4 md:px-8 animation ${
          isMoving ? "animate-move" : ""
        }`}
      >
        <div className="text-white text-sm font-bold  mb-2">
          Click here to download the schedule of IGS Conference 2025 →
          <button
            href="#"
            className="text-orange-400 hover:underline hover:animation-play-state: paused; text-xl font-bold  text-base"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
//expoted to header
