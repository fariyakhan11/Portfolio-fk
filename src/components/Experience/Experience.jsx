import React, { useContext, useEffect } from "react";
import { themeContext } from "../../Context";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Experience.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import c1 from "../../img/c1.jpg";
import c2 from "../../img/c2.jpg";
import c3 from "../../img/c3.jpeg";
import c4 from "../../img/c4.png";
import c5 from "../../img/c5.jpg";
import c6 from "../../img/c6.jpg";

const Experience = () => {
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

  const clients = [
    {img: c1},
    {img: c2},
    {img: c3},
    {img: c4},
    {img: c5},
    {img: c6},
  ];

  return (
    <motion.div className="t-wrapper" id="testimonial"
    ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={transition}
    >
      <div className="t-heading">
        <span>Certifications and </span>
        <span>Experience</span>
      <div className="blur t-blur1" style={{ display: darkMode? "none": "block", background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ display: darkMode? "none": "block", background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Experience;
