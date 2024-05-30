import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'; 
import { useColor } from '../../Context/ColorContext';

export function Footer() {
  const { backgroundColor } = useColor();
  const [showSocials, setShowSocials] = useState(false);

  const handleSocialsClick = () => {
    setShowSocials(!showSocials);
  };

  return (
    <nav className={`footer ${showSocials ? 'footer-expanded' : ''}`} style={{ backgroundColor }}>
      <div className="footer-content">
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `footer-item ${isActive ? 'active-footer-item' : ''}`
          }>
          CONTACT
        </NavLink>
        <div className="footer-item socials-container">
          <div 
            className={`footer-item ${showSocials ? 'active-footer-item' : ''}`}
            onClick={handleSocialsClick}
          >
            SOCIALS
          </div>
          <div className={`socials-list ${showSocials ? 'show' : ''}`}>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">WhatsApp</a>
            <a href="#" className="social-link">Behance</a>
          </div>
        </div>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `footer-item ${isActive ? 'active-footer-item' : ''}`
          }>
          ABOUT US
        </NavLink>
        <NavLink
          to="/work-with-us"
          className={({ isActive }) =>
            `footer-item ${isActive ? 'active-footer-item' : ''}`
          }>
          WORK WITH US
        </NavLink>
      </div>
    </nav>
  );
}
