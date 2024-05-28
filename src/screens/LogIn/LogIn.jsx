import React from 'react';
import './LogIn.css'; 
import google from '../../assets/google.png'

export function LogIn() {
  return (
    <>
        <div className='title-wrapper'>
          <h1 className='title-login'>LOG-IN</h1>
         <div className='p-btn'>
             <p>Don't have an account?</p>
             <button className="sign-up-button">SING UP</button>
        </div>
        </div>
        
        
        <div className="LogIn-form-container">
                <div className="input">
                    <input type="emailLogin" placeholder="E-MAIL" />
                </div>
                <div className="input">
                    <input type="password" placeholder="PASSWORD" />
                </div>
                <button className='login'>LOGIN</button>
                <button className='login-google'>
                  <img src={google} alt="Google Logo" className="google-icon" />
                  Login with Google
                </button>
                
        </div>
    </>
  );
};