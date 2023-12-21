import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/footor.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>"Unlocking Imagination, One Page at a Time."</p>
        <div className="keywords">
          <span></span>
          <span>Site Feedback</span>
          <span>Contact Us</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

      <div className="social-icons">
        <span>Connect with us:</span>
        <a href="#" className="social-link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-link">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
