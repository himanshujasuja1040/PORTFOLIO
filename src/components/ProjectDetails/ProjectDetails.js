import React, { useEffect } from "react";
import "./ProjectDetails.css";
import Aos from "aos";
import "aos/dist/aos.css";
const ProjectDetails = ({ img, text, details, link, hastags }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="projectdetails">
      <div className="projectdetails_left">
        <div data-aos="fade-right" className="projectdetails_left_text">
          <p>{text}</p>
        </div>
        <img data-aos="zoom-out-up" src={img} alt="" />
      </div>
      <div className="projectdetails_right">
        <p>{details}</p>
        <br />
        <p>{hastags}</p>
        <a href={link}>View Here - </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
