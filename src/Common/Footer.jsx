import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>SDR Estore</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 SDR PVT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
