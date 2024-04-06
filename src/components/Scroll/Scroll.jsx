import React, { useState, useEffect } from 'react';
import './Scroll.css'; // Import your CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll behavior
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}></button>
  );
};

export default ScrollToTopButton;
