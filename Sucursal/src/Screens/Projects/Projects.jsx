import React, { useState, useEffect } from 'react';
import './Projects.css'; 
import { useColor } from '../../Context/ColorContext';
import { NavLink } from 'react-router-dom';
import ProjectImg from '../../components/ProjectImg/ProjectImg';

export function Projects() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const { setBackgroundColor } = useColor();
  const [iframeLink, setIframeLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [filterText, setFilterText] = useState(''); 

  useEffect(() => {
    setBackgroundColor('#22A6F8');
    return () => {
      setBackgroundColor('#FCF2E6');
    };
  }, [setBackgroundColor]);

  const handleProjectClick = (projectName, iframeLink, description) => {
    setSelectedProject(projectName);
    setIframeLink(iframeLink);
    setProjectDescription(description); 
    setShowDetail(true);
  };

  return (
    <div className='projects'>
      <h1 className='title-projects'>PROJECTS</h1>
      <h3 className='subtitle-projects'>WORK AND SERVICES</h3>
      <div className='projects-info'>
        <p className='projects-description'>
          SUCURSAL is a group of four young students from Universidad Icesi with a shared passion for creativity and design. We decided to combine our skills and visions to give life to 'Sucursal,' an innovative design firm founded in 2024.
        </p>
        <button className='work-with-us'>WORK WITH US</button>
        <div className='projects-info-grid'>
          <div className='first-info'>
            <div className='paragraph'>
              <h3 className='info-grid-title'>•<br />PROCESS</h3>
              <p>
                Sucursal not only creates design; we create stories, emotions, and connections. We are committed to making a lasting mark in the world of design, elevating aesthetics and innovation.
              </p>
            </div>
            <div className='paragraph'>
              <h3 className='info-grid-title'>•<br />PRICING</h3>
              <p>Affordable prices according to your specific needs. We review your idea and provide you with initial estimates and sketches.</p>
            </div>
          </div>
          <svg width="100%" height="1">
            <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
          </svg>
          <div className='second-info'>
            <div className='paragraph'>
              <h3 className='info-grid-title'>•<br />SERVICES</h3>
              <p className='projects-list'>WEBSITE DESIGN<br />PUBLICITY DESIGN<br />BRAND DESIGN<br />APP DESIGN<br /></p>
            </div>
            <div className='paragraph'>
              <h3 className='info-grid-title'>•<br />CAPABILITIES</h3>
              <p className='projects-list'>UX DESIGN<br />UI DESIGN<br />GRAPHIC DESIGN<br />BRANDING<br />3D MODELING<br />ILLUSTRATION<br /></p>
            </div>
          </div>
          <svg width="100%" height="1">
            <line x1="0" y1="0" x2="100%" y2="0" style={{stroke:"#2E2A25", strokeWidth:1}} />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Filter by author, description, or category"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="filter-input"
        />
        {!showDetail && (
          <div className='projects-preview'>
            <ProjectImg onProjectClick={handleProjectClick} filterText={filterText} />
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
              <p>{projectDescription}</p>
              <iframe src={iframeLink} title="Project Iframe" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
