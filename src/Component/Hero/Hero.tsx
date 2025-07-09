import React, { useEffect, useState } from 'react';
import './Hero.css';
import Navbar from '../navbar/navbar'; // Adjust the path as necessary
import herobg from '../../assets/herobg.webp'; // Adjust the path as necessary


const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-background">
        <img
          src={herobg}
          alt="Background"
          className="hero-background"
        />
        
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <Navbar />
        <div className={`hero-text${animate ? ' pop-in' : ''}`}>
          <h1 className="hero-title">Web Development for Your Business</h1>
          <p className="hero-description">
            Unlock your business potential with a professional website. We build modern, responsive, and scalable web solutions tailored to your business needs.
            Let our experienced team help you establish a strong online presence and reach more customers.
          </p>
          <button className="hero-button">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;