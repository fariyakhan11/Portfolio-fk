import React, { useContext, useRef, useState, useEffect } from "react";
import Wave from 'react-wavify';
import "./Contact.css";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Contact = () => {
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

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xjdwm65",
        "template_zkgbgbq",
        form.current,
        "3M0MxJT_sKjwzFPI1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <motion.div className="contact-form" id="contact"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={transition}
      >
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{ display: darkMode ? "none" : "block", background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name" />
            <input type="email" name="user_email" className="user" placeholder="Email" />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for Contacting!"}</span>

            <div className="blur c-blur1" style={{ display: darkMode ? "none" : "block", background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </motion.div>
      <div class="contentcontainer">
        <div class="f-content">
          <p class="gmail">fariyakhan644@gmail.com</p>
          <div class="f-icons">
            <a href="https://www.linkedin.com/in/fariya-khan-0557a921b/">
              <Linkedin color="white" size={"2rem"} />
            </a>
            <a href="https://github.com/fariyakhan11">
              <Gitub color="white" size={"2rem"} />
            </a>
          </div>
        </div>
      </div>


      <div>

        <Wave fill="url(#gradient)" className="wavefooter"
          style={{
            width: '100%', height: "40%", position: 'absolute', left: 0,
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
            zIndex: -1
          }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="20%" stopColor="#6247AA" />
              <stop offset="80%" stopColor="#A594F9" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </>

  );
};

export default Contact;
