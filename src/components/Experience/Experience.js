import React from "react";
import "./Experience.css";

const Experience = (props) => {
  return (
    <div className="experience">
      <div className="experience_box">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Experience;
