import React, { useRef } from 'react';
import Hero from '../../Component/Hero/Hero';
import About from '../../Component/About/About';
import Project from '../../Component/Project/project';
import Team from '../../Component/Team/team';
import Testimonial from '../../Component/Testimonial/testimonial'; 
import Contact from '../../Component/Contact/contact'; // Assuming you have a Contact component
import Footer from '../../Component/Footer/footer'; // Assuming you have a Footer component



const Home = () => {
  const heroRef = useRef(null);

  return (
    <div
      className="min-h-screen w-full bg-[#141414] space-y-0"
      style={{ backgroundColor: "#212121" }}
    >
      <div ref={heroRef} className="mb-0">
        <Hero />
        <About />
        <Project />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
      {/* Future sections can be added here, using refs as needed */}
    </div>
  );
};

export default Home;