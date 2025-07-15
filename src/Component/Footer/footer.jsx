import React from 'react';
import './footer.css';
import logo from '../../assets/LogoMy.webp';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram , FaFacebook} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="DevTeam Logo" className="footer-logo-img" />
            <h3 className="footer-logo">DevTeam</h3>
            <p className="footer-tagline">Modern web development solutions for your business needs</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/devteam1721" target="_blank" rel="noopener noreferrer" aria-label="FaceBook">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">E-Commerce</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">CMS Solutions</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul className="contact-info">
                <li>contactdevteam1721@gmail.com</li>
                <li>+94 75-262-2860</li>
                <li>Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} DevTeam. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;