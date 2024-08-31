"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-09-02");

const CountDown = () => {
  return (
    <Countdown
      date={endingDate}
      className="font-bold text-4xl text-green-300"
    />
  );
};

export default CountDown;
