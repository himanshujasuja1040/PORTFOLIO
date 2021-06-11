import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import LeftFixBox from "./components/LeftFixBox/LeftFixBox";
import Main from "./components/Main/Main";
import TopHeaderBox from "./components/TopHeaderBox/TopHeaderBox";
import Story from "./components/Story/Story";
import Experience from "./components/Experience/Experience";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const [bgColor, setbgColor] = useState("white");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2900) {
        setbgColor("black");
      } else {
        setbgColor("white");
      }
    });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="app" style={{ backgroundColor: bgColor }}>
        <LeftFixBox />
        <div className="app_row">
          <TopHeaderBox bgColor={bgColor} />
          <Main bgColor={bgColor} />
          <Story />
          <h1
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "50px",
              marginTop: "40px",
            }}
          >
            EXPERIENCE
          </h1>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            OPEN SOURCE
          </h2>
          <Experience text=" CONTRIBUTOR in For Community " />
          <Experience text=" CONTRIBUTOR in For Community " />
          <Experience text=" CONTRIBUTOR in For Community " />
          <div
            style={{
              color: "white",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              data-aos="fade-down"
              style={{ fontSize: "120px", fontWeight: "900" }}
            >
              STILL WAITING ? 🙄
              <br />
              WANNA CONNECT...!!
              <br />
              🥺
            </p>
          </div>
          <div style={{ width: "100%", height: "50vh" }}>
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "50px",
                fontWeight: "600",
              }}
              data-aos="fade-right"
            >
              I WILL BE HAPPY TO CHITCHAT A BIT
            </p>
            <div
              className="app_icons"
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "50px",
              }}
            >
              <FacebookIcon />
              <InstagramIcon />
              <GitHubIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
            <h1
              data-aos="fade"
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              💕 HIMANSHU JASUJA 💕
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
