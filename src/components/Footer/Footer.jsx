import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'; 
import { useColor } from '../../Context/ColorContext';

export function Footer() {
  const { backgroundColor } = useColor();

    return (
      <nav className="footer" style={{ backgroundColor }}>
        <div className="footer-content">
        <NavLink
          to="/contact-us"  
          className={({ isActive }) => 
            `footer-item ${isActive ? 'active-footer-item' : ''}`
          }>
          CONTACT
        </NavLink> 
        <NavLink 
          to="/socials"  
          className={({ isActive }) => 
            `footer-item ${isActive ? 'active-footer-item' : ''}`
          }>
          SOCIALS
        </NavLink> 
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
