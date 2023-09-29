import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} BookStoreOnline</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
