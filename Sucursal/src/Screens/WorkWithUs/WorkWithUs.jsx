import React from 'react';
import './WorkWithUs.css'; 

export function WorkWithUs() {
  return (
    <div className='work'>
        <h1 className='title-work'>WORK WITH US</h1>
        
        <div className="work-form-container">
                <div className="input">
                    <input type="text" placeholder="NAME" />
                </div>
                <div className="input">
                    <input type="email" placeholder="E-MAIL" />
                </div>
                <div className="input">
                    <textarea placeholder="MESSAGE"></textarea>
                </div>
                    <button className='work-btn'>WORK WITH US</button>
        </div>
    </div>
  );
};