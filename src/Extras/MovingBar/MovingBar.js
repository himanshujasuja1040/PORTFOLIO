import React from "react";
import "./MovingBar.css";
const MovingBar = ({ text }) => {
  return (
    <div className="movingbar">
      <div className="movingbar_bar">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default MovingBar;
