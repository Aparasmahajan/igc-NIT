import React, { useEffect, useState } from "react";

export const CountdownTimer = () => {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'fixed', top: '60%', right: '0', width: '62px', zIndex: '999' ,padding: '1px'}}>
      <div className="bg-cyan-500" style={{justifyContent: 'center'}}>Days {timeLeft.days}</div>
      <div className="bg-cyan-500" style={{justifyContent: 'center' }}>Hours {timeLeft.hours}</div>
      <div className="bg-cyan-500" style={{justifyContent: 'center' }}>Minutes {timeLeft.minutes}</div>
      <div className="bg-cyan-500" style={{justifyContent: 'center' }}>Seconds {timeLeft.seconds}</div>
    </div>
  );
};
