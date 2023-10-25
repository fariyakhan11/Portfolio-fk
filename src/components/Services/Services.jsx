import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import mob from "../../img/mob.png";
import ux from "../../img/ui.png";
import web from "../../img/web.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {duration: 1,type: "spring"};

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          I offer services in UI/UX design, React.js development, and React Native app development.
          <br />
          I excel in creating visually appealing and user-friendly interfaces while leveraging the power of React  
          <br />technologies to build efficient and scalable web and mobile applications.
          <br />
          Explore my work to see how I can enhance your digital projects.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        {/* 1 card */}
        <motion.div
          initial={{ left: "18rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card
            emoji={ux}
            heading={"UI/UX"}
            detail={"Figma, Adobe Xd"} />
        </motion.div>
        
        {/* 2 card */}
        <motion.div
          initial={{ left: "-10rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Card
            emoji={web}
            heading={"Web Developer"}
            detail={"Html, CSS, JavaScript, ReactJs"} />
        </motion.div>

        {/* 3 card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card
            emoji={mob}
            heading={"Mobile Application"}
            detail={"React Native, Nodejs, MongoDB"}
          // color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
