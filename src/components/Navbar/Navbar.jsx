import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/logo.png'



export function Navbar() {
    return (
      <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-nav-item' : ''}`
          }>
          Home
        </NavLink>  
        <NavLink 
          to="/about-us" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-nav-item' : ''}`
          }>
          About Us
        </NavLink>
        <NavLink 
          to="/contact-us" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-nav-item' : ''}`
          }>
          Contact
        </NavLink>
        <NavLink 
          to="/proyectos" 
          className={({ isActive }) => 
            `nav-item ${isActive ? 'active-nav-item' : ''}`
          }>
          Projects
        </NavLink> 
      </div>
      <div className="navbar-right">
        <button className="btn">Login</button>
      </div>
    </nav>
    );
}

