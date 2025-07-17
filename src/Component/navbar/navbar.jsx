import React, { useState } from 'react';
import './navbar.css';
import LogoMy from '../../assets/LogoMy.webp'; // Add this import at the top4

const Navbar = ({ hide }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`navbar-wrapper${hide ? ' navbar-hidden' : ''}`}>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div
            className="navbar-logo"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              const heroSection = document.getElementById('Hero');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <img src={LogoMy} alt="DevTeam Logo" className="navbar-logo-img" />
            DevTeam
          </div>
          
          {/* Desktop Navigation */}
          <ul className={`navbar-links ${mobileMenuOpen ? 'show' : ''}`}>
            <li><a href="/#Hero">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li>
              <a href="/webproject">
                Project
              </a>
            </li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/#team">Team</a></li>
            <li
              className="navbar-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#service">Service &#9662;</a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="/webproject">Web Development</a></li>
                  <li><a href="/project">POS System</a></li>
                </ul>
              )}
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Inquiry Button - For larger screens */}
          <div className="inquiry-button">
            <a
              href="#contact"
              className="btn-primary"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('contact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Inquiry
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;