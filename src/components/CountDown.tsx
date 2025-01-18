"use client";
import React from "react";
import Countdown from "react-countdown";

// Calculate the end date dynamically (1 day from now)
const endingDate = new Date();
endingDate.setDate(endingDate.getDate() + 1); // Add 1 day to the current date

const CountDown = () => {
  return (
    <Countdown
      date={endingDate}
      className="font-bold text-4xl text-green-300"
    />
  );
};

export default CountDown;
