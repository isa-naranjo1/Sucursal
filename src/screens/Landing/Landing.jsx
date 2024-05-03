import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'; 
import logo from '../../acses/logo-azul.png'
import flecha from '../../acses/arrow.png'

const Landing = () => {

    const navigate = useNavigate(); 

    const goToInicio = () => {
        navigate('/Home'); 
  };

  return (
    <div className="Landing-container">
        <div className='Landig'>
            <img src={logo} alt="Logo-azul" className="Logo-azul" />
            <h1 className='title-Landing'>SUCURSAL</h1>
        </div>
    
        <div className="p">
            <p>Convertimos tus ideas en experiencias visuales inolvidables</p>
        </div>

        <button className='Flecha' onClick={goToInicio}>
            GET TO KNOW US 
            <img src={flecha} alt="arrow" className="aroow" />
        </button>
    </div>
  );
};

export default Landing;
