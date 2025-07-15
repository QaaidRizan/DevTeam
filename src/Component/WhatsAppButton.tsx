import React from 'react';
import whatsappLogo from '../assets/Whatsapp.webp'; // Adjust path if needed

const WhatsAppButton = () => {
  // Updated with Sri Lankan number
  const phoneNumber = "94752622860"; // Removed "+" and "0" for proper WhatsApp formatting
  const message = "Hello! I'm interested in your engineering services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <>
      <style>
        {`
          @keyframes whatsapp-glow {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }
        `}
      </style>
      <a 
        href={whatsappUrl} 
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'whatsapp-glow 2s infinite'
        }}
      >
        <img 
          src={whatsappLogo} 
          alt="WhatsApp" 
          style={{ 
            width: '60px',
            height: '60px'
          }} 
        />
      </a>
    </>
  );
};

export default WhatsAppButton;