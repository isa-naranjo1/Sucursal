import React from 'react';
import './Navbar.css'; 
import logo from '../../acses/logo.png'



export function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="nav-item1">About Us</span>
          <span className="nav-item2">Contact</span>
          <span className="nav-item3">Projects</span>
        </div>
        <div className="navbar-right">
          <button className="btn">Login</button>
        </div>
      </nav>
    );
}

