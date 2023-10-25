import React, { useContext, useEffect} from "react";
import { themeContext } from "../../Context";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Intro.css";
import girl from "../../img/girl.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
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
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Fariya Khan</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            An experienced front-end developer with a passion for web design and development.
            <br />I specialize in producing high-quality work that meets the unique needs of my clients. With a deep understanding of the latest trends and technologies in web development,
            <br /> I'm committed to delivering exceptional results that exceed expectations. Thank you for visiting my profile.
            <br /><br />Let's connect and discuss how I can help you achieve your web development goals.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/fariya-khan-0557a921b/"><img src={LinkedIn} alt="linkedin" /></a>
          <a href="https://github.com/fariyakhan11" ><img src={Github} alt="github" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <div className="circle">
          <img className="myimg" src={girl} alt="" />
        </div>
        {darkMode ? (
          <>
            <div className="blur" style={{ display: "none" }}></div>
            <div className="blur" style={{ display: "none" }}></div>
          </>
        ) : (
          <>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className="blur" style={{ background: "#C1F5FF", top: "10rem", width: "20rem", height: "11rem", left: "-2rem" }}></div>
          </>
        )}
      </div>
    </motion.div>

  );
};

export default Intro;
