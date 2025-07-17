import React, { useEffect, useRef } from 'react';
import './team.css';
// You'll need to add an actual image here
import profileImage from '../../assets/ME.webp'; // Add a profile image to your assets folder

const Team = () => {
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
    <section className="team-section" id="team" ref={sectionRef}>
      <div className="team-blob"></div>
      <div className="team-blob secondary"></div>
      
      <div className="team-container">
        <div className="section-headers">
          <h2 className="team-title">The Person Behind the Code</h2>
        </div>
        
        <div className="team-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="John Developer" className="profile-image" />
            <div className="profile-accent"></div>
          </div>
          
          <div className="profile-content">
            <h3 className="profile-name">M R M Qaaid</h3>
            <p className="profile-position">Senior Web Developer & Founder</p>
            
            <p className="profile-bio">
              I'm a freelance web developer based in Sri Lnaka. I specialize in building fast, modern websites 
              for small businesses and startups. With over 2 years of experience in web development, 
              I've helped dozens of clients establish their online presence.
            </p>
            
            <p className="profile-bio">
              I believe in clear communication, quick delivery, and long-term client relationships. 
              My approach focuses on creating websites that not only look great but also drive results for your business.
            </p>
            
            <div className="profile-skills">
              <div className="skill-tag">React</div>
              <div className="skill-tag">TypeScript</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">UI/UX Design</div>
              <div className="skill-tag">WordPress</div>
            </div>
            
            <div className="profile-contact">
              <a href="mailto:john@devteam.com" className="contact-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;