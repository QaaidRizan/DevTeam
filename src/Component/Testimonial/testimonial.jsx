import React, { useEffect, useRef } from 'react';
import './testimonial.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "Working with DevTeam was a game-changer for my business. They built my site in just 3 days and even helped me connect it to my Instagram. The design is exactly what I wanted!",
    author: "Amira J.",
    position: "Makeup Artist",
    rating: 5
  },
  {
    id: 2,
    text: "I was struggling to find a developer who could understand my vision for an e-commerce site. DevTeam not only understood it but enhanced it with features I hadn't even thought of. My sales have increased 40% since launch.",
    author: "Michael T.",
    position: "Online Retailer",
    rating: 5
  },
  {
    id: 3,
    text: "The team at DevTeam are true professionals. They created a custom CMS that perfectly suits our company's unique needs. Their support after launch has been exceptional as well.",
    author: "Sarah L.",
    position: "Marketing Director",
    rating: 5
  }
];

const Testimonial = () => {
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

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  return (
    <section className="testimonial-section" id="testimonials" ref={sectionRef}>
      <div className="testimonial-blob"></div>
      <div className="testimonial-blob secondary"></div>
      
      <div className="testimonial-container">
        <div className="section-headers">
          <h2 className="testimonial-titles">What Our Clients Say</h2>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;