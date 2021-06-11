import React, { useEffect } from "react";
import "./Main.css";
import Photo from "../../photo.png";
import NetflixClone from "../../assests/Netflix_Clone.jpeg";
import ExcelClone from "../../assests/excelClone.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import MovingBar from "../../Extras/MovingBar/MovingBar";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { useState } from "react";
const Main = ({ bgColor }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "2s ease",
      }}
      className="main"
    >
      <div className="main_detailText" data-aos="fade-up">
        <h2>
          Hey! ✋ <br />
          I'm Himanshu Jasuja <br />
          I'm a Web Developer and Designer
          <br />
          Open Source Enthusiastic 💓
        </h2>
      </div>
      <div className="main_image">
        <img src={Photo} alt="" />
      </div>
      <MovingBar text="CHECK SOME OF MY STUFFS " />
      <ProjectDetails
        img={NetflixClone}
        text="NETFLIX CLONE"
        details="Netflix Clone made in Reactjs With using Api"
        hastags="#Netflix #React #Api"
        link="https://netflix-clone-tau-two.vercel.app/"
      />
      <ProjectDetails
        img={ExcelClone}
        text="EXCEL CLONE"
        details="Excel Clone, made in HTML CSS and JS"
        hastags="#Excel #Js "
        link="https://himanshujasuja1040.github.io/Excel_Clone/"
      />
      <MovingBar text="Want to know more ’bout me?" />
    </div>
  );
};

export default Main;
