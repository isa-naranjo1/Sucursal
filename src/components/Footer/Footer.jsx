import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'; 

export function Footer() {
    return (
      <nav className="footer">
        <div>
        <NavLink
          to="/contact-us"  
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-footer-item' : ''}`
          }>
          CONTACT
        </NavLink> 
        <NavLink 
          to="/socials"  
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-footer-item' : ''}`
          }>
          SOCIALS
        </NavLink> 
        <NavLink 
          to="/about-us"  
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-footer-item' : ''}`
          }>
          ABOUT US
        </NavLink> 
        <NavLink 
          to="/work-with-us"  
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-footer-item' : ''}`
          }>
          WORK WITH US
        </NavLink> 

          
        </div>
      </nav>
    );
}
