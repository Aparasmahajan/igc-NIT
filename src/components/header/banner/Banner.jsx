import React, { useState, useEffect } from 'react';
import './Banner.css';

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
        className={`flex justify-between items-center py-4 px-4 md:px-8 animation ${isMoving ? 'animate-move' : ''}`}
      >
        <div className="text-white text-xl font-bold">
          Click here to download the schedule of IGS Conference 2024
        </div>
        <a
          href="#"
          className="text-orange-400 hover:underline hover:animation-play-state: paused; text-xl font-bold"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          DOWNLOAD NOW →
        </a>
      </div>
    </div>
  );
};

export default Banner;
//expoted to header