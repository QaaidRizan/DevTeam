import React, { useRef } from 'react';
import './Home.css'; // Make sure to import the CSS file
import Hero from '../../Component/Hero/Hero';
import About from '../../Component/About/About';
import Project from '../../Component/Project/project';
import Team from '../../Component/Team/team';
import Testimonial from '../../Component/Testimonial/testimonial'; 
import Contact from '../../Component/Contact/contact';
import Footer from '../../Component/Footer/footer';
import WhatsAppButton from '../../Component/WhatsAppButton';

const Home = () => {
  const heroRef = useRef(null);

  return (
    <div className="home-container">
      <div ref={heroRef} className="home-content">
        <Hero />
        <About />
        <Project />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Home;