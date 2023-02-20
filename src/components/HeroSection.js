import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

/*this function is to run a video on a loop on the main page*/
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Camp in the National Parks</h1>
      <p>Join us today!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
