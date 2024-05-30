import React, { useState, useEffect } from 'react';
import './Home.css';
import Carousel from "../../components/Carrousel/Carrousel";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

export function Inicio() {
  // Almacena los proyectos recuperados de Firebase
  const [projects, setProjects] = useState([]);
 
  // Carga los proyectos desde Firebase 
  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'documentos'));
      const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div className="home">
      {/* Encabezado */}
      <div className="header">
        <h1 className="title">SUCURSAL</h1>
        <h2 className="subtitle">COLLECTIVE PORTFOLIO</h2>
        <Carousel />
      </div>

      {/* Nuestro trabajo */}
      <div className="our-work">
        <h3 className="right-title">OUR WORK</h3>
        <div className="work-table-container">
          <table className="work-table">
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: 'bold', color: '#000000' }}>
                    <Link to="/proyectos" style={{ textDecoration: 'none', color: 'inherit' }}>
                      {project.title}
                    </Link>
                  </td>
                  <td className="project-type">{project.categories.join(',  ')}</td>
                  <td className="project-focus">
                    <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                      {project.autor}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Servicios */}
      <div className="services">
        <div className='services-title-wrap'>
          <svg xmlns="http://www.w3.org/2000/svg" width="133" height="16" viewBox="0 0 133 16" fill="none">
            <path d="M132.707 8.70711C133.098 8.31658 133.098 7.68342 132.707 7.29289L126.343 0.928932C125.953 0.538408 125.319 0.538408 124.929 0.928932C124.538 1.31946 124.538 1.95262 124.929 2.34315L130.586 8L124.929 13.6569C124.538 14.0474 124.538 14.6805 124.929 15.0711C125.319 15.4616 125.953 15.4616 126.343 15.0711L132.707 8.70711ZM0 9H132V7H0V9Z" fill="#2E2A25"/>
          </svg>
          <h2 className="services-title">SERVICES</h2>
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