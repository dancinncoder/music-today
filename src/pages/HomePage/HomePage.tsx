import React from "react";
import "./HomePage.module.css";
import MovingTitle from "../../components/MovingTitle";
import MusicSelectStartContainer from "../../components/MusicSelectStartContainer";

function HomePage() {
  return (
    <div>
      <div className="inner-container">
        <MovingTitle />
        <MusicSelectStartContainer />
      </div>
    </div>
  );
}

export default HomePage;
