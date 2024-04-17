import React, { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const calculateTimeLeft = () => {
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

  const formatLabel = (value, label) => {
    return value === 1 ? label.slice(0, -1) : label;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "fixed",
        top: "60%",
        right: "0",
        zIndex: "999",
        padding: "0px",
      }}
    >
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-16">
        {formatLabel(timeLeft.days, "Days")} <br />
        <p className="font-bold">{timeLeft.days}</p>
      </div>
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-16">
        {formatLabel(timeLeft.hours, "Hours")} <br />
        <p className="font-bold">{timeLeft.hours}</p>
      </div>
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-16">
        {formatLabel(timeLeft.minutes, "Minutes")} <br />
        <p className="font-bold">{timeLeft.minutes}</p>
      </div>
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-16">
        {formatLabel(timeLeft.seconds, "Seconds")} <br />
        <p className="font-bold">{timeLeft.seconds}</p>
      </div>
    </div>
  );
};
