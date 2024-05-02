import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='title-contact'>CONTACT US</h1>
        
        <div className="contact-form-container">
                <div className="input">
                    <input type="text" placeholder="NAME" />
                </div>
                <div className="input">
                    <input type="email" placeholder="E-MAIL" />
                </div>
                <div className="input">
                    <textarea placeholder="MESSAGE"></textarea>
                </div>
                    <button className='contact-btn'>Contact Us</button>
        </div>
    </div>
  );
};

export default Contact;
