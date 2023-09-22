import React from "react";
import "./contact.style.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please feel free to get in touch with us:</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <h2>Email</h2>
          <p>mahtab.sani12381@gmail.com</p>
        </div>
        
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+01783873816</p>
        </div>
        
        <div className="contact-item">
          <h2>Address</h2>
          <p>123 Merul Badda</p>
          <p>Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
