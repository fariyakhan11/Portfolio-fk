import React, { useState, useEffect } from 'react';
import './slider.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

import i1 from './imgs/i1.jpeg';
import i2 from './imgs/i2.jpeg';
import i3 from './imgs/i3.jpeg';
import i4 from './imgs/i4.jpeg';
import i5 from './imgs/i5.jpeg';
import i6 from './imgs/i6.jpeg';
import i7 from './imgs/i7.jpeg';
import i8 from './imgs/i8.jpeg';


import a1 from './imgs/a1.jpeg'
import a2 from './imgs/a2.jpeg'
import a3 from './imgs/a3.jpeg'
import a5 from './imgs/a5.jpeg'
import a6 from './imgs/a6.jpeg'
import a7 from './imgs/a7.jpeg'
import a8 from './imgs/a8.jpeg'
import a9 from './imgs/a9.jpeg'
import a10 from './imgs/a10.jpeg'
import a11 from './imgs/a11.jpeg'
import a12 from './imgs/a12.jpeg'


const AppSlider = ({ images, title, description, code }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [currentImage, images]);

    const handleClick = (index) => {
        setCurrentImage(index);
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="app-slider">
            <img src={images[currentImage]} alt={title} />
            <h4>{title}</h4>
            <p className="desc" style={{ color: darkMode ? 'white' : '' }}>
                {description}
            </p>
            <a className="button" href={code} target="_blank" rel="noreferrer">
                Source Code
            </a>
            <div className="slider-buttons">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-button ${currentImage === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

function AppWeb() {
    const [sliderIndex] = useState(0);
    const [sliderData] = useState([
        {
            images: [a1,a2,a3,a5,a6,a7,a8,a9,a10,a11,a12],
            title: 'Dakter Saab App',
            description: '"Grayscale, mirror, contrast, and transpose effortlessly. Get creative and transform your images with just a few clicks. Try it out now and see the difference. Explore the possibilities with us."',
            code: "https://github.com/fariyakhan11/DakterSaabApp"
          },
          {
            images: [i1,i2,i3,i4,i5,i6,i7,i8],
            title: 'interiAR',
            description: '"Flutter App Get creative and transform your images with just a few clicks. Try it out now and see the difference. Explore the possibilities with us."',
            code: "https://github.com/fariyakhan11/interiAR_flutter_app"
          },
    ]);
  
    return (
      <div className="app-slider-container">
        {sliderData.slice(sliderIndex, sliderIndex + 2).map((slider, index) => (
          <AppSlider
            key={index}
            images={slider.images}
            title={slider.title}
            description={slider.description}
            code={slider.code}
          />
        ))}
      </div>
    );
  }
  
  export default AppWeb;
  

