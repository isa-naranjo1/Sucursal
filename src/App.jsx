import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { NavbarMobile } from './components/NavbarMobile/NavbarMobile';
import { Footer } from './components/Footer/Footer';
import { Inicio } from './Screens/Home/Home'; 
import { AboutUs } from './Screens/AboutUs/AboutUs'; 
import { Contact }  from './Screens/Contact/Contact';
import { Projects } from './Screens/Projects/Projects';
import { LogIn } from './Screens/LogIn/LogIn'
import { Menu } from './Screens/Menu/menu';
import { Publish } from './Screens/Publish/Publish';
import { ColorProvider } from './Context/ColorContext';

function App() {
  return (
    <ColorProvider>
    <div className="App">
      <Navbar /> {/* Navbar permanece */}
      <NavbarMobile /> {/* Navbar permanece */}
      
      <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/menu" element={<Menu />} />
      </Routes> 
      
      <Footer /> {/* Footer permanece */}
    </div>
    </ColorProvider>
  );
}

export default App;
