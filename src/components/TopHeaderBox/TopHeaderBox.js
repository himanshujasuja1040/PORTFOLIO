import React from "react";
import "./TopHeaderBox.css";
const TopHeaderBox = ({ bgColor }) => {
  return (
    <div
      className="topheaderbox"
      style={{ boxShadow: `inset 0px 0px 200px ${bgColor}` }}
    >
      <div className="Work">
        <h5>
          <a href="">Work</a>
        </h5>
      </div>
      <div className="Story">
        <h5>
          <a href="">Story</a>
        </h5>
      </div>
      <div className="Experience">
        <h5>
          <a href="">Experience</a>
        </h5>
      </div>
      <div className="Contact">
        <h5>
          <a href="">Contact</a>
        </h5>
      </div>
    </div>
  );
};

export default TopHeaderBox;
