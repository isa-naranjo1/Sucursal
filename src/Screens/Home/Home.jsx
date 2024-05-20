import React from 'react';
import './Home.css';

export function Inicio() {
  return (
    <div className="home">
      <h1 className="title">SUCURSAL</h1>
      <h2 className="subtitle">COLLECTIVE PORTFOLIO</h2>
      <h3 className="right-title">OUR WORK</h3>
      
      <div className="work-table-container">
        <div className="work-table">
          <div className="table-item"><span className="italic">Spotify Piano</span>  /  Publicidad interactiva  /  
            <span className="link">Aplicaciones echosystems</span>
          </div>
          <div className="table-item"><span className="italic">Spotify Boulevard OOH</span>  /  Publicidad interactiva  /  
            <span className="link">Aplicaciones echosystems</span>
          </div>
          <div className="table-item"><span className="italic">Spotify Piano</span>  /  Publicidad interactiva  /  
            <span className="link">Aplicaciones echosystems</span>
          </div>
          <div className="table-item"><span className="italic">Spotify Piano</span>  /  Publicidad interactiva  /  
            <span className="link">Aplicaciones echosystems</span>
          </div>
          <div className="table-item"><span className="italic">Spotify Piano</span>  /  Publicidad interactiva  /  
            <span className="link">Aplicaciones echosystems</span>
          </div>
        </div>
      </div>

      <div className="services">
        <div className='sevices-title-wrap'>
          <svg xmlns="http://www.w3.org/2000/svg" width="133" height="16" viewBox="0 0 133 16" fill="none">
            <path d="M132.707 8.70711C133.098 8.31658 133.098 7.68342 132.707 7.29289L126.343 0.928932C125.953 0.538408 125.319 0.538408 124.929 0.928932C124.538 1.31946 124.538 1.95262 124.929 2.34315L130.586 8L124.929 13.6569C124.538 14.0474 124.538 14.6805 124.929 15.0711C125.319 15.4616 125.953 15.4616 126.343 15.0711L132.707 8.70711ZM0 9H132V7H0V9Z" fill="#2E2A25"/>
          </svg>
          <h2 className="services-title">SERVICES</h2>
        </div>     
        <div className="services-search">
          <div className="input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 38 38" fill="none" className="search-icon">
              <path d="M25.1412 25.1412L31.8587 31.8587M28.5 16.625C28.5 23.1834 23.1834 28.5 16.625 28.5C10.0666 28.5 4.75 23.1834 4.75 16.625C4.75 10.0666 10.0666 4.75 16.625 4.75C23.1834 4.75 28.5 10.0666 28.5 16.625Z" stroke="#2E2A25" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input 
              type="text" 
              className="services-input"
              placeholder="What are you looking for..." 
            />
          </div>
        </div>
        <div className="services-items">
          <div className="services-item">
            <h4 className="services-title2">UI DESIGN</h4>
            <img src="https://i.ibb.co/S3cKZRj/Post5.png" alt="UI DESIGN" className="services-image" />
          </div>
          <div className="services-item">
            <h4 className="services-title2">UX INVESTIGATION</h4>
            <img src="https://i.ibb.co/kHmBrPc/Post6.png" alt="UX INVESTIGATION" className="services-image" />    
          </div>
          <div className="services-item">
            <h4 className="services-title2">GRAPHIC DESIGN</h4>
            <img src="https://i.pinimg.com/736x/ac/9b/38/ac9b38fa10fb50555f0c764171d51ecd.jpg" alt="GRAPHIC DESIGN" className="services-image" /> 
          </div>
        </div>
      </div>
    </div>
  );
}
