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
import c7 from "../../img/c7.jpeg";


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
    { img: c4 },
    { img: c3 },
    { img: c7 },
    { img: c1 },
    { img: c5 },
    { img: c6 },
    { img: c2 },
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
        <span>Certificates</span>
        {/* <span>Experience</span> */}
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
              <div className="testimonial"  style={{ backgroundColor: darkMode ? "rgba(117, 79, 132, 0.5)" : "" }}>
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
