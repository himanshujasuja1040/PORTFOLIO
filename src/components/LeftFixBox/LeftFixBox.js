import React from "react";
import logo from "../../logo.png";
import "./LeftFixBox.css";
const LeftFixBox = () => {
  return (
    <div className="leftfixbox">
      <div className="leftfixbox_top">
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="leftfixbox_down">
        <ul>
          <li>
            <a href="">Linkdein</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftFixBox;
