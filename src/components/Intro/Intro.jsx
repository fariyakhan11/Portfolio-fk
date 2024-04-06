import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../Context";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Intro.css";
import girl from "../../img/girl.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import gmail from "../../img/mail.png";
import Resume from './Fariya Khan Cv.pdf';

import { Link } from "react-scroll";


const Intro = () => {
  // theme
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // animation
  const control = useAnimation()
  const [ref, inView] = useInView()
  const transition = { duration: 2, type: "spring" };

  const boxVariant =
  {
    hidden: { x: -100 },
    visible: { x: 0 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div className="Intro" id="Intro"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={transition}>

      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "var(--lightpurple)" : "" }}>Fariya Khan</span>
          <span style={{ color: darkMode ? "white" : "" }}>Web developer</span>
          <span style={{ color: darkMode ? "white" : "" }}>Let's connect and discuss how I can assist you in achieving your software engineering goals</span>
        </div>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/fariya-khan-0557a921b/"><img src={LinkedIn} alt="linkedin" /></a>
          <a href="https://github.com/fariyakhan11" ><img src={Github} alt="github" /></a>
          <a href="https://mail.google.com" ><img src={gmail} alt="Gmail" /></a>
        </div>

      </div>
      {/* right side */}
      <div className="i-right" style={{ backgroundColor: darkMode ? "rgba(117, 79, 132, 0.5)" : "" }}>
        <div className="tittle" style={{ color: darkMode ? "white" : "" }} >
          <h2 style={{ color: darkMode ? "var(--lightpurple)" : "" }}>About me </h2>
          <p className="aboutme" style={{ color: darkMode ? "white" : "" }}>
          I'm Fariya Khan, a passionate software engineer with a focus on web development. 
          I have hands-on experience with HTML/CSS, JavaScript, React, React Native. I'm dedicated to delivering solutions and staying updated with the latest technologies.
          I'm eager to learn and explore advanced frameworks and tools to enhance my skills and create exceptional digital experiences. 
          I'm also excited to excel my skills further by diving into the MERN stack (MongoDB, Express.js, React, Node.js) and building full-stack applications.
          </p>
          <div className="buttonsdiv">
            <a href={Resume} download>
              <button className="button d-button">Download CV</button>
            </a>

            <Link to="contact" smooth={true} spy={true}>
              <button className="button">Contact</button>
            </Link>
          </div>
        </div>



        {darkMode ? (
          <>
            <div className="blur" style={{ display: "none" }}></div>
            <div className="blur" style={{ display: "none" }}></div>
          </>
        ) : (
          <>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className="blur" style={{ background: "#C1F5FF", top: "10rem", width: "20rem", height: "11rem", left: "-30rem" }}></div>
          </>
        )}
      </div>
    </motion.div>

  );
};

export default Intro;
