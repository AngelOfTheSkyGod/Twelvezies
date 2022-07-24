import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";

export default function Animation() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  return <Confetti width={1200} height={1200} />;
}
