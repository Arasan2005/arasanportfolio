import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
//import LinkedIn from "@iconscout/react-unicons"

const Footer = () => {
  const openinsta = () => {
    window.open("https://www.instagram.com/__mr._king_s__/");
  };

  const opengithub = () => {
    window.open("https://github.com/Arasan2005/");
  };

  const openlinkedin = () => {
    window.open("https://www.linkedin.com/in/arasan-s-aa6145227/");
  };
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <Insta color="white" size={"3rem"} onClick={openinsta} />
          <LinkedIn color="white" size={"3rem"} onClick={openlinkedin} />
          <Gitub color="white" size={"3rem"} onClick={opengithub} />
        </div>
        <span>arasans2005@gmail.com</span>
        <span> ©2024 Copy Rights Mr.King.</span>
      </div>
    </div>
  );
};

export default Footer;
