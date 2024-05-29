import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css'; 
import close from '../../assets/close.png'

export function Menu() {
    useEffect(() => {
        document.body.classList.add('menu-body');
        return () => {
            document.body.classList.remove('menu-body');
        };
    }, []);

    return (
        <nav className="menu">
            <div className="menu-left">
                <NavLink to="/" className="menu-item">
                    Home
                </NavLink>  
                <NavLink to="/about-us" className="menu-item">
                    About Us
                </NavLink>
                <NavLink to="/contact-us" className="menu-item">
                    Contact
                </NavLink>
                <NavLink to="/proyectos" className="menu-item">
                    Projects
                </NavLink> 
            </div>
            <NavLink to="/" className="menu-item">
                <button className='close'>
                    <img src={close} alt="close" className="close-icon" />
                </button>
            </NavLink>
        </nav>
    );
}