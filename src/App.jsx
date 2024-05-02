import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { NavbarMobile } from './components/NavbarMobile/NavbarMobile';
import { Footer } from './components/Footer/Footer';
import { Inicio } from './components/Inicio/Inicio'; 
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros'; 
import  Contact  from './Screens/Contact/Contact'; 
import LogIn from './Screens/LogIn/LogIn'
import { Menu } from './Screens/Menu/menu';
import { Publish } from './components/Publish/Publish';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar permanece */}
      <NavbarMobile /> {/* Navbar permanece */}
      
      <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/about-us" element={<SobreNosotros />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/menu" element={<Menu />} />
      </Routes> 
      
      <Footer /> {/* Footer permanece */}
    </div>
  );
}

export default App;
