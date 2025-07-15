import React from 'react';
import './WebProject.css';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import { FaCode, FaMobileAlt, FaDesktop, FaServer } from 'react-icons/fa';
import webproject1 from '../../assets/webproject1.webp';
import webproject2 from '../../assets/webproject2.webp';
import webproject3 from '../../assets/webproject3.webp';
import webproject4 from '../../assets/webproject4.webp';
import webproject5 from '../../assets/webproject5.webp';
import webproject6 from '../../assets/webproject6.webp';

const projectImages = [
  webproject1,
  webproject2,
  webproject3,
  webproject4,
  webproject5,
  webproject6,
];

const WebProject = () => {
  return (
    <>
      <Navbar />
      <div className="web-projects-page">
        <div className="container">
          {/* Web Development Introduction Section */}
          <div className="web-dev-intro">
            <div className="intro-header">
              <h2>Our Web Development Expertise</h2>
              <p>We create powerful, responsive web applications that drive business growth</p>
            </div>
            
            <div className="intro-services">
              <div className="service-card">
                <div className="service-icon">
                  <FaDesktop />
                </div>
                <h3>Frontend Development</h3>
                <p>We build responsive, interactive user interfaces using modern frameworks like React, Angular, and Vue. Our focus is on creating intuitive experiences that work flawlessly across all devices.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaServer />
                </div>
                <h3>Backend Development</h3>
                <p>Our robust server solutions power your applications with secure, scalable architectures. We work with Node.js, Python, PHP, and other technologies to create APIs and services that deliver performance.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaMobileAlt />
                </div>
                <h3>Responsive Design</h3>
                <p>Every website we build is fully responsive and optimized for all screen sizes. We ensure your users have a consistent experience whether on desktop, tablet, or mobile devices.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaCode />
                </div>
                <h3>Full-Stack Solutions</h3>
                <p>From database design to deployment and maintenance, we handle every aspect of your web project. Our end-to-end approach ensures seamless integration across all components.</p>
              </div>
            </div>
            
            <div className="intro-approach">
              <h3>Our Development Process</h3>
              <p>We follow a structured approach to web development that ensures quality, performance, and maintainability. Every project begins with thorough requirements gathering and planning, followed by iterative development cycles with regular client feedback. We implement rigorous testing and optimization before launch and provide ongoing support to keep your application running smoothly.</p>
            </div>
          </div>
          
          {/* Project Portfolio Heading */}
          <div className="portfolio-header">
            <h2>Featured Web Projects</h2>
            <p>Explore our recent work showcasing our expertise and capabilities</p>
          </div>

          {/* Images Grid */}
          <div className="project-images-grid">
            {projectImages.map((img, idx) => (
              <div className="project-image-item" key={idx}>
                <img src={img} alt={`Dummy Screenshot ${idx + 1}`} />
              </div>
            ))}
          </div>

          {/* About Project - Now using class-based styling */}
          <div className="project-info-container">
            <h2 className="project-info-title">About the Project</h2>
            <p className="project-info-text">
              I & I Autos' modern business website showcases their vehicle lineup and automotive services with style and clarity. The website features an attractive car gallery with detailed vehicle information, easy-to-use search filters, and convenient contact options. Customers can browse the full vehicle inventory, compare models, and submit inquiries directly through the website. The site also includes a private management area where staff can update vehicle listings, track customer interest, and see which cars are getting the most attention from visitors.
            </p>
          </div>

          {/* Key Features - Now using class-based styling */}
          <div className="project-info-container">
            <h2 className="project-info-title">Key Features</h2>
            <ul className="project-info-list">
              <li>Responsive design for desktop and mobile</li>
              <li>Real-time updates and notifications</li>
              <li>Advanced user authentication and roles</li>
              <li>Admin dashboard with analytics</li>
              <li>SEO optimized and fast loading</li>
              <li>Easy content management</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebProject;