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
import { WorkWithUs } from './Screens/WorkWithUs/WorkWithUs';
import { Profile } from './Screens/Profile/Profile';
import { ColorProvider } from './Context/ColorContext';
import { AuthProvider } from './Context/AuthContext';
import { ProtectedRoute } from './Screens/Error/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ColorProvider>
        <div className="App">
          <Navbar /> {}
          <NavbarMobile /> {}
          
          <Routes> 
            <Route path="/" element={<Inicio />} /> 
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/login" element={<LogIn />} />
            <Route 
              path="/publish" 
              element={
                <ProtectedRoute>
                  <Publish />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="/menu" element={<Menu />} />
          </Routes> 
          
          <Footer /> {}
        </div>
      </ColorProvider>
    </AuthProvider>
  );
}
export default App;