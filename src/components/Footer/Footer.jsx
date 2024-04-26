import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

export function Footer() {
    return (
      <nav className="footer">
        <div>
        <Link to="/contact-us" className="nav-item1">CONTACT</Link>
          <span className="nav-item2">SOCIALS</span>
          <Link to="/about-us" className="nav-item3">ABOUT US</Link>
          <span className="nav-item4">WORK WITH US</span>
        </div>
      </nav>
    );
}
