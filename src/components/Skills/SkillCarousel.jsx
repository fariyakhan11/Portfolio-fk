import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SkillCarousel.css';
import { themeContext } from "../../Context";


import html from '../../img/html.png';
import css from '../../img/css3.png';
import js from '../../img/js.png';
import reactImg from '../../img/react.png';
import rn from '../../img/rn.png';
import sql from '../../img/mysql.png';
// import mysql from '../../img/mysql.png';
import mdb from '../../img/mdb.png';
import tail from '../../img/tail.png';
import node from '../../img/node.png';
import boot from '../../img/boot.png';
import figma from '../../img/figma.png';




const SkillCarousel = () => {
  // theme
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const settings = {
    infinite: true,
    slidesToShow: 6,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const skills = [
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'Tailwind CSS', image: tail },
    { name: 'Bootstrap', image: boot },
    { name: 'JavaScript', image: js },
    { name: 'React', image: reactImg },
    { name: 'Node Js', image: node },
    { name: 'React Native', image: rn },
    { name: 'SQL', image: sql },
    { name: 'MongoDB', image: mdb },
    { name: 'Figma', image: figma },


  ];

  return (<>
    <div className="Skills" id='skills' >
      <div className="awesomeS">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Skills</span>
        <div className="blur sk-blur1" style={{ display: darkMode ? "none" : "block", background: "var(--purple)" }}></div>
        <div className="blur sk-blur2" style={{ display: darkMode ? "none" : "block", background: "var(--purple)" }}></div>
      </div>

    </div>

    <Slider className="carousel-div"{...settings}>
      {skills.map((skill, index) => (
        <div key={index} className="carousel-item">
          <div className='cbox'>
            <img src={skill.image} />
            <p className='skill-name' style={{ color: darkMode ? "white" : "" }} > {skill.name} </p>
          </div>

        </div>
      ))}
    </Slider>
  </>
  );
};

export default SkillCarousel;
