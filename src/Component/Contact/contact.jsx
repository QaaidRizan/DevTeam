import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thanks for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-blob"></div>
      <div className="contact-blob secondary"></div>
      
      <div className="contact-container">
        <div className="section-header">
          <h2 className="contact-title">Ready to Start Your Project?</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk About Your Project</h3>
            <p>
              Have a project in mind? Need a new website or want to redesign your existing one? 
              I'm here to help you turn your vision into reality.
            </p>
            
            <div className="contact-methods">
              <a href="https://wa.me/94752622860" className="contact-method whatsapp" target="_blank" rel="noopener noreferrer">
                <div className="method-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-details">
                  <h4>WhatsApp</h4>
                  <p>Chat Now</p>
                  <span>+94 075 262 2860</span>
                </div>
              </a>
              
              <a href="mailto:qaaidrizan113@gmail.com" className="contact-method email">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>Send a Message</p>
                  <span>contactdevteam1721@gmail.com</span>
                </div>
              </a>
            </div>
            
            <div className="availability">
              <p><strong>Available:</strong> Monday to Friday, 9am - 6pm</p>
              <p><strong>Response time:</strong> Within 24 hours</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Quick Contact Form</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className="btn-icon" />
              </button>
              
              {submitMessage && (
                <div className="submit-message">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="cta-banner">
          <div className="cta-content">
            <h3>💬 Want a free demo? Message me on WhatsApp!</h3>
            <a href="https://wa.me/94752622860" className="cta-button" target="_blank" rel="noopener noreferrer">
              🟢 Chat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;