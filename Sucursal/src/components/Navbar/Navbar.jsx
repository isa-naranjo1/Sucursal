import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/logo.png';
import { useColor } from '../../Context/ColorContext';
import { useAuth } from '../../Context/AuthContext';

export function Navbar() {
  const { backgroundColor } = useColor();
  const { currentUser } = useAuth();

  return (
    <nav className="navbar" style={{ backgroundColor }}>
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
        {currentUser ? (
          <>
            <NavLink to="/publish" className="nav-item">
              <button className="btn">Publish</button>
            </NavLink>
            <NavLink to="/profile" className="nav-item">
              <button className="btn">Profile</button>
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className="nav-item">
            <button className="btn">Login</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}
