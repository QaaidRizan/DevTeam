import React, { useEffect, useRef } from 'react';
import './About.css';
// Import a dummy image - this is just a placeholder
// Import icons (you'll need to install: npm install react-icons)
import { FaShoppingCart, FaBuilding, FaLaptopCode, FaWrench } from 'react-icons/fa';

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-blob"></div>
      <div className="about-blob secondary"></div>
      
      <div className="about-container">
        {/* Main content card with background image */}
        <div className="about-card">
          <div className="about-card-overlay">
            <div className="about-card-content">
              {/* Move section-header here */}
              <div className="section-header">
                <h2 className="about-title">Web Development Solutions for Your Business</h2>
              </div>
              <p className="about-text">
                At DevTeam, we specialize in creating custom, high-performance websites tailored to your specific business needs. 
                Our expertise spans across various web development domains, helping businesses establish a strong digital presence.
              </p>
              
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <FaShoppingCart />
                  </div>
                  <h3>E-Commerce Websites</h3>
                  <p>Custom online stores with secure payment gateways and seamless user experience to maximize your sales.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <FaBuilding />
                  </div>
                  <h3>Corporate Websites</h3>
                  <p>Professional business websites that effectively communicate your brand values and create a lasting impression.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <FaLaptopCode />
                  </div>
                  <h3>Web Applications</h3>
                  <p>Powerful, responsive web applications designed for both internal business processes and customer-facing services.</p>
                </div>
                
                <div className="service-card">
                  <div className="service-icon">
                    <FaWrench />
                  </div>
                  <h3>CMS Solutions</h3>
                  <p>Content management systems that allow you to easily update and maintain your website without technical expertise.</p>
                </div>
              </div>
              
           

              <div className="about-quote">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10.5V9C10 7.9 9.1 7 8 7H5C3.9 7 3 7.9 3 9V15C3 16.1 3.9 17 5 17H8C9.1 17 10 16.1 10 15V13.5M10 10.5H12M10 13.5H12M21 13.5H19M21 10.5H19M19 10.5V9C19 7.9 18.1 7 17 7H14C12.9 7 12 7.9 12 9V15C12 16.1 12.9 17 14 17H17C18.1 17 19 16.1 19 15V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Our approach combines cutting-edge technology with creative design to deliver websites that not only look great but also perform exceptionally well.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;