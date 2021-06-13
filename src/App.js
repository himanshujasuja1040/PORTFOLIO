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
        {window.scrollY < 2900 ? <LeftFixBox /> : <div></div>}
        <div className="app_row">
          {window.scrollY < 2900 ? <TopHeaderBox bgColor={bgColor} /> : <></>}

          <Main bgColor={bgColor} />
          <Story />
          <h1 className="app_experience_text">EXPERIENCE</h1>
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
          <div className="app_stillwaiting">
            <p className="app_stillwaiting_text" data-aos="fade-left">
              STILL WAITING ? 🙄
              <br />
              WANNA CONNECT...!!
              <br />
              🥺
            </p>
          </div>
          <div style={{ width: "100%", height: "50vh" }}>
            <p className="app_happyChitchat_text" data-aos="fade-right">
              I WILL BE HAPPY TO CHITCHAT A BIT
            </p>
            <div
              className="app_icons"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "50px",
              }}
            >
              <a href="https://facebook.com" style={{ color: "white" }}>
                <FacebookIcon style={{ fontSize: 40 }} />
              </a>
              <a
                href="https://instagram.com/himanshu__jasuja_"
                style={{ color: "white" }}
              >
                <InstagramIcon style={{ fontSize: 40 }} />
              </a>
              <a
                href="https://github.com/himanshujasuja1040"
                style={{ color: "white" }}
              >
                <GitHubIcon style={{ fontSize: 40 }} />
              </a>
              <a
                href="https://linkedin.com/in/himanshu-jasuja-b2a660201"
                style={{ color: "white" }}
              >
                <LinkedInIcon style={{ fontSize: 40 }} />
              </a>
              <a
                href="https://twitter.com/Himanshujasuja2"
                style={{ color: "white" }}
              >
                <TwitterIcon style={{ fontSize: 40 }} />
              </a>
            </div>
            <h1
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
