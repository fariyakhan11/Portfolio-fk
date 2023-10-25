import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { themeContext } from "../../Context";
import "./Skills.css";
import html from '../../img/html.png';
import css from '../../img/css3.png';
import js from '../../img/js.png';
import react from '../../img/react.png';
import rn from '../../img/rn.png';
import sql from '../../img/sql.png';
import mysql from '../../img/mysql.png';
import mdb from '../../img/mdb.png';

const Skills = () => {
  // theme
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // animation
  const control = useAnimation()
  const [ref, inView] = useInView()
  const transition = { duration: 2, type: "spring" };
  const boxVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
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
    <motion.div className="Skills" id='skills'
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={transition}>
      <div className="awesomeS">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Skills</span>
        <span style={{ color: darkMode ? "white" : "" }}> As a skilled web developer, I specialize in front-end languages like HTML, CSS, JS, React JS, and React Native. Additionally, I have hands-on
          experience in back-end technologies such as NodeJs, MongoDB and programming languages like Python & Java.
          <br/>
          I am committed to continuously expanding my skill set and am presently engaged in Learning Angular."
          </span>
          
          <div className="blur sk-blur1" style={{ display: darkMode ? "none" : "block", background: "var(--purple)" }}></div>
        <div className="blur sk-blur2" style={{ display: darkMode ? "none" : "block", background: "var(--purple)" }}></div>
      </div>

      <div className="skillcontainer">
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={html} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>HTML 5</div>
        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={css} className="sbtnimg" alt="GitHub" />

          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>CSS</div>

        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={js} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>Java Script</div>
        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={sql} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>SQL</div>
        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={mysql} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>My SQL</div>

        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={react} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>React Js</div>

        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={rn} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>React Native</div>

        </div>
        <div class="sbtn">
          <div class="sbtn-container">
            <img src={mdb} className="sbtnimg" alt="GitHub" />
          </div>
          <div class="sbtn-name" style={{ color: darkMode ? 'white' : '' }}>MongoDB</div>

        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
