import React, { useState } from 'react';
import './LogIn.css'; 
import google from '../../assets/google.png';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { login, loginWithGoogle, register } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Failed to login with Google', error);
    }
  };

  const handleSignUp = async () => {
    try {
      await register(email, password, username);
      navigate('/');
    } catch (error) {
      console.error('Failed to sign up', error);
    }
  };

  return (
    <>
      <div className='title-wrapper'>
        <h1 className='title-login'>LOG-IN</h1>
        <div className='p-btn'>
          <p>Don't have an account?</p>
          <button className="sign-up-button" onClick={handleSignUp}>SIGN UP</button>
        </div>
      </div>
      
      <div className="LogIn-form-container">
        <div className="input">
          <input 
            type="text" 
            placeholder="USERNAME" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <input 
            type="email" 
            placeholder="E-MAIL" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input 
            type="password" 
            placeholder="PASSWORD" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='login' onClick={handleLogin}>LOGIN</button>
        <button className='login-google' onClick={handleGoogleLogin}>
          <img src={google} alt="Google Logo" className="google-icon" />
          Login with Google
        </button>
      </div>
    </>
  );
}
