import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Inicio } from './components/Inicio/Inicio'; 
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros'; 
import { Contacto } from './components/Contacto/Contacto'; 
import { Publish } from './components/Publish/Publish';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar permanece */}
      
      <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/about-us" element={<SobreNosotros />} />
        <Route path="/contact-us" element={<Contacto />} />
        <Route path="/publish" element={<Publish />} />
      </Routes> 
      
      <Footer /> {/* Footer permanece */}
    </div>
  );
}

export default App;
