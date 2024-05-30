import React, { useState } from 'react';
import './Contact.css'; 
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'



export function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleChangeName = (e) => {
        setName(e.target.value);
        updateButtonState(e.target.value, email);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        updateButtonState(name, e.target.value);
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        if (!name || !email) {
            Swal.fire({
                title: 'Por favor complete los campos Nombre y Correo Electrónico para enviar',
                icon: 'warning',
                iconColor: '#FF9800',
                confirmButtonText: 'OK'
            });
            return;
        }

        Swal.fire({
        title: 'Tu contacto ha sido enviado',
        text: 'Estaremos en contacto contigo',
        icon: 'success',
        iconColor: '#0164FF',
        confirmButtonText: 'Volver a home',
        showCancelButton: true,
        cancelButtonText: 'Enviar otro contacto'
        }).then((result) => {
        if (result.isConfirmed) {
            navigate('/')
            console.log('Ir a proyectos');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            setName('');
            setEmail('');
            setMessage('');
            setPhone('');
        }
        });
    };

      // Función para actualizar el estado del botón
      const updateButtonState = (nameValue, emailValue) => {
        setIsButtonDisabled(!nameValue || !emailValue);
    };

  return (
    <div className='contact'>
        <h1 className='title-contact'>CONTACT US</h1>
        
        <div className="contact-form-container">
                <div className="input">
                    <input type="text" 
                    placeholder="NAME" 
                    value={name} 
                    onChange={handleChangeName}/>
                </div>
                <div className="input">
                    <input type="email" 
                    placeholder="E-MAIL" 
                    value={email} 
                    onChange={handleChangeEmail}/>
                </div>
                <div className="input">
                    <input type="number" 
                    placeholder="CELL PHONE" 
                    pattern="[0-9]*"
                    value={phone} 
                    onChange={handleChangePhone}/>
                </div>
                <div className="input">
                    <textarea placeholder="MESSAGE"
                    value={message} 
                    onChange={handleChangeMessage}
                    ></textarea>
                </div>
                <button className='contact-btn'
                onClick={handleClick} >CONTACT US</button>
        </div>
    </div>
  );
};