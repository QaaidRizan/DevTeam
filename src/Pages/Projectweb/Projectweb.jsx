import React, { useRef, useState, useEffect } from 'react';
import WebProject from "../../Component/WebProject/WebProject"; 
import Navbar from '../../Component/navbar/navbar';
import Footer from '../../Component/Footer/footer';
import './Projectweb.css';



const Projectweb = () => {
  const heroRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="projectweb-container">
      <Navbar hide={!showNavbar} />
      <div className="projectweb-content">
        <WebProject />
      </div>
      <Footer />
    </div>
  );
};

export default Projectweb;