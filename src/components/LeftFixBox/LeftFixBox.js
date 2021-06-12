import React from "react";
import logo from "../../logo.png";
import "./LeftFixBox.css";
const LeftFixBox = () => {
  return (
    <div className="leftfixbox">
      <div className="leftfixbox_top">
        <a href="https://facebook.com">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="leftfixbox_down">
        <ul>
          <li>
            <a href="https://linkedin.com/in/himanshu-jasuja-b2a660201">
              Linkdein
            </a>
          </li>
          <li>
            <a href="https://instagram.com/himanshu__jasuja_">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/Himanshujasuja2">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/himanshujasuja1040">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftFixBox;
