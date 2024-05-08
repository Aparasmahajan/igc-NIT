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
    return value <= 1 ? label.slice(0, -1) : label;
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
        zIndex: "1",
      }}
    >
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-10 text-[10px]">
        <div className="my-[4px]">
          {formatLabel(timeLeft.days, "Days")} <br />
          <p className="font-bold text-xs">{timeLeft.days}</p>
        </div>
      </div>
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-10 text-[10px]">
        <div className="my-[4px]">
          {formatLabel(timeLeft.hours, "Hours")} <br />
          <p className="font-bold text-xs">{timeLeft.hours}</p>
        </div>
      </div>
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-10 text-[10px]">
        <div className="my-[4px]">
          {formatLabel(timeLeft.minutes, "Minutes")} <br />
          <p className="font-bold text-xs">{timeLeft.minutes}</p>
        </div>
      <div className="flex-col items-center justify-center flex h-2/3 border border-orange-400 bg-teal-700 text-white w-10 text-[10px]"></div>
        <div className="my-[4px]">
          {formatLabel(timeLeft.seconds, "Seconds")} <br />
          <p className="font-bold text-xs">{timeLeft.seconds}</p>
        </div>
      </div>
    </div>
  );
};
