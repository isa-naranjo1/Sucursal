import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/logo.png'



export function Navbar() {
    return (
      <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        
        {/* Utiliza Link para los elementos de navegación */}
        <Link to="/" className="nav-item">Home</Link> 
        <Link to="/about-us" className="nav-item">About Us</Link>
        <Link to="/contact-us" className="nav-item">Contact</Link>
        <Link to="/proyectos" className="nav-item">Projects</Link> 
      </div>
      <div className="navbar-right">
        <button className="btn">Login</button>
      </div>
    </nav>
    );
}

