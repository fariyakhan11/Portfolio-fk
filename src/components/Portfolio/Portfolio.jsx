import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react"
import { themeContext } from "../../Context";
import Web from "../Slider/slider";
import AppWeb from "../Slider/appslider";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Projects</span>
      {/* <span>Websites</span> */}
      <div>
        <Web/>
        <AppWeb/>
      </div>
    </div>
  );
};

export default Portfolio;
