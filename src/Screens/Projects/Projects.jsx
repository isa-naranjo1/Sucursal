import React, { useState, useEffect } from 'react';
import './Projects.css'; 
import { useColor } from '../../Context/ColorContext';

export function Projects() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const { setBackgroundColor } = useColor();

  useEffect(() => {
    setBackgroundColor('#22A6F8');
    return () => {
      setBackgroundColor('#FCF2E6');
    };
  }, [setBackgroundColor]);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
    setShowDetail(true);
  };

  return (
    <div className='projects'>
        <h1 className='title-projects'>PROJECTS</h1>
        <h3 className='subtitle-projects'>WORK AND SERVICES</h3>
        <div className='projects-info'>
          <p className='projects-description'>SUCURSAL is a group of four young students from Universidad Icesi with a shared passion for creativity and design. We decided to combine our skills and visions to give life to 'Sucursal,' an innovative design firm founded in 2024.</p>
          <button className='work-with-us'>WORK WITH US</button>
          <div className='projects-info-grid'>
            <div className='first-info'>
              <div className='paragraph'>
                <h3 className='info-grid-title'>
                  •<br></br>PROCESS
                </h3>
                <p>Sucursal not only creates design; we create stories, emotions, and connections. We are committed to making a lasting mark in the world of design, elevating aesthetics and innovation.</p>
              </div>
            <div className='paragraph'>
                <h3 className='info-grid-title'>
                  •<br></br>PRICING
                </h3>
                <p>Affordable prices according to your specific needs. We review your idea and provide you with initial estimates and sketches.</p>
              </div>
            </div>
            <svg width="100%" height="1">
              <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
            </svg>
            <div className='second-info'>
              <div className='paragraph'>
                <h3 className='info-grid-title'>
                  •<br></br>SERVICES
                </h3>
                <p className='projects-list'>WEBSITE DESIGN<br></br>PUBLICITY DESIGN<br></br>BRAND DESIGN<br></br>APP DESIGN<br></br></p>
              </div>
              <div className='paragraph'>
                <h3 className='info-grid-title'>
                  •<br></br>CAPABILITIES
                </h3>
               <p className='projects-list'>UX DESIGN<br></br>UI DESIGN<br></br>GRAPHIC DESIGN<br></br>BRANDING<br></br>3D MODELING<br></br>ILLUSTRATION<br></br></p>
              </div>
            </div>
            <svg width="100%" height="1">
              <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
            </svg>            
          </div>
          {!showDetail && (
            <div className='projects-preview'>
              <button className='projects-filter'>
                FILTER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="28"
                  viewBox="0 0 21 28"
                  fill="none"
                  className='arrow-down-svg'
                  >
                <path
                  d="M10.5 25.875V1.5M1.30762 17.7498L10.5 26.9422L19.6924 17.7498"
                  stroke="#2E2A25"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className='projects-grid'>
              <div className='grid-element' onClick={() => handleProjectClick("Tour publicity")}>
                <img src="https://i.pinimg.com/736x/a2/17/a4/a217a4293e10ad8e00df7e2d80c79a72.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Tour publicity</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Play publicity")}>
                <img src="https://i.pinimg.com/736x/47/57/49/4757491df78b9a40f54284956abae193.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Play publicity</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Concert publicity")}>
                <img src="https://i.pinimg.com/736x/ac/9b/38/ac9b38fa10fb50555f0c764171d51ecd.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Concert publicity</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("App design")}>
                <img src="https://i.pinimg.com/736x/f2/0a/06/f20a06ef77228b62a3be7aa06cfa26de.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>App design</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Brand design")}>
                <img src="https://i.pinimg.com/736x/62/36/43/6236436972a262d2aa61fd8604fce164.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Brand design</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Game design")}>
                <img src="https://i.pinimg.com/736x/1c/7c/b6/1c7cb67944ea4f82ec2f62c611a74340.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Game design</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Magazine design")}>
                <img src="https://i.pinimg.com/736x/e8/74/88/e874880149406c6409aa121848704f94.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Magazine design</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Disco cover design")}>
                <img src="https://i.pinimg.com/736x/ed/3b/5b/ed3b5b3b1d0ae9383c48045acd6bdea6.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Disco cover design</h4>
              </div>
              <div className='grid-element' onClick={() => handleProjectClick("Interactive publicity")}>
                <img src="https://i.pinimg.com/736x/8f/05/de/8f05de1f1dabacdda41cefea4db231e0.jpg" alt="" />
                <div className="hover-content">
                  <p className="view-text">VIEW</p>
                </div>
                <h4 className='project-name'>Interactive publicity</h4>
              </div>
              </div>
              <button className='more-btn'>
                MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  className="arrow-right-svg"
                >
                <path
                  d="M25.8462 10.7212L1.47119 10.7212M17.721 19.9136L26.9134 10.7212L17.721 1.5288"
                  stroke="#2E2A25"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
          {showDetail && (
            <div className="project-detail">
              <button className="go-back-btn" onClick={() => setShowDetail(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" viewBox="0 0 28 21" fill="none" className='arrow-back-svg'>
                    <path d="M2.53857 10.7212L26.9136 10.7212M10.6638 1.52881L1.47137 10.7212L10.6638 19.9136" stroke="#2E2A25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    GO BACK
                </button>
              <div className='project-detail-display'>      
                <h2 className="project-detail-title">{selectedProject}</h2>
                <div className='project-detail-img'>
                  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e69c54177943559.656f83856fbe4.jpg" alt="Project" />
                </div>            
              </div>
            </div>
          )}
        </div>
    </div>
  );
};