import React, { useState, useEffect } from 'react';
import './slider.css';
import { useContext } from "react";
import { themeContext } from "../../Context";

import p1 from './imgs/pix1.png';
import p2 from './imgs/pix2.png';
import p3 from './imgs/pix3.png';
import p4 from './imgs/pix4.png';
import p5 from './imgs/pix5.png';

import f1 from './imgs/1.jpg'
import f2 from './imgs/2.jpg'
import f3 from './imgs/3.jpg'
import f4 from './imgs/4.jpg'
import f5 from './imgs/5.jpg'
import f6 from './imgs/6.jpg'
import f7 from './imgs/7.jpg'
import f8 from './imgs/8.jpg'
import f9 from './imgs/9.jpg'
import f10 from './imgs/10.jpg'
import f11 from './imgs/11.jpg'
import f12 from './imgs/12.jpg'
import f13 from './imgs/13.jpg'
import f14 from './imgs/14.jpg'

import d1 from './imgs/ds1.jpeg'
import d2 from './imgs/ds2.jpeg'
import d3 from './imgs/ds3.jpeg'
import d5 from './imgs/ds5.jpeg'
import d6 from './imgs/ds6.jpeg'
import d7 from './imgs/ds7.jpeg'
import d8 from './imgs/ds8.jpeg'
import d9 from './imgs/dsb.jpg'
import d10 from './imgs/dsb2.jpg'
import d11 from './imgs/dsh.jpg'
import d12 from './imgs/dsp.jpg'
import d13 from './imgs/dsd.jpg'


const Slider = ({ images, name, description, code }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className="slider" style={{ backgroundColor: darkMode ? "rgba(117, 79, 132, 0.5)" : "" }} >
      <div >
        <p className='pname'>{name}</p>
        <img src={images[currentImage]} alt={name} />
      </div>
      <div className='descdiv'>
        <p className='desc'>{description}</p>
        <a className="button" href={code} target="_blank" rel="noreferrer">Source Code</a>
      </div>
    </div>
  );
};

function Web() {
  const [sliderIndex] = useState(0);
  const [sliderData] = useState([

    {
      images: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14],
      name: 'FnF house Of Guns',
      description: '"F&F HOG is an online webapp that allows lawful purchases of legal arms and ammunition \n This modern webapp along with the latest UI design attracts customers and provides ease of  use to those surfing the website. \n  The aim of this system is to facilitate potential customers in \n buying arms seamlessly. They can view all the available arms according to categories,\n view  product description in order to help in their purchases or just gain knowledge about them"',
      code: "https://github.com/fariyakhan11/FnF-House-of-Guns-ECommerce-website"
    },
    {
      images: [p1, p2, p3, p4, p5],
      name: 'PixBay',
      description: '"Revamp your images in seconds! With our website, apply a variety of transformations such as sketch, grayscale, mirror, contrast, and transpose effortlessly. Get creative and transform your images with just a few clicks. Try it out now and see the difference. Explore the possibilities with us."',
      code: "https://github.com/fariyakhan11/Pixbay"
    },
    {
      images: [d1, d2, d3, d6, d5, d6, d7, d8, d9, d10, d11, d12, d13],
      name: 'Dakter Saab Website',
      description: '"Develop a comprehensive healthcare application that offers a doctor recommendation system based on specific criteria, online appointment booking, GPS-based path suggestions, blood bank connections, blood donation registration, and email verification for appointment authenticity. Users can also find pharmacies with price comparisons and pre-book medicines. Additionally, healthcare centers can register and connect with potential customers through the platform."',
      code: "https://github.com/fariyakhan11/DakterSaabWeb_Frontend"
    },

  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className="slider-container">
      {sliderData.slice(sliderIndex, sliderIndex + 3).map((slider, index) => (
        <Slider key={index}
          images={slider.images}
          name={slider.name}
          description={slider.description}
          code={slider.code}
        />
      ))}
    </div>
  )
};

export default Web;
