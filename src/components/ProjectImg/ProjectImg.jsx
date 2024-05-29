import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const ProjectImg = ({ onProjectClick }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'documentos'));
      const projectsData = querySnapshot.docs.map(doc => doc.data());
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);


    return (
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className='grid-element'
            key={index}
            onClick={() => onProjectClick(project.title, project.iframeLink, project.description, project.categories, project.autor )} // Pasamos todos los datos relevantes
          >
            <img src={project.imageUrl} alt="Uploaded file" className="uploaded-image" />
            <div className="hover-content">
              <p className="view-text">VIEW</p>
            </div>
            <h2 className='project-name'>{project.title}</h2>
            <p className='project-autor'>{project.autor }</p>
          </div>
        ))}
      </div>
    );
  };


export default ProjectImg;
