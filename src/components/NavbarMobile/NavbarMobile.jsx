import React, { useState } from 'react'; // Añade useState aquí
import { NavLink } from 'react-router-dom';
import './NavbarMobile.css'; 
import logo from '../../assets/logo.png'
import login from '../../acses/login-btn.png'
import menu from '../../acses/menu-btn.png'
import loginActive from '../../acses/loginActive.png';

export function NavbarMobile() {
  const [isButtonActive, setButtonActive] = useState(false);

  const handleButtonClick = () => {
    setButtonActive(!isButtonActive);
  };

  return (
    <nav className="navbar-web">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        <NavLink to="/login" className="Nav-item">
          <button className='img-login' onClick={handleButtonClick}>
            <img src={isButtonActive ? loginActive : login} alt="login" className="login-icon" />
          </button>
        </NavLink>

        <NavLink to="/menu" className="Nav-item">
          <button className='Menu'>
            <img src={menu} alt="Menu" className="Menu-icon" />
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
