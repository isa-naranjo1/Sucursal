import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import basura from '../../assets/basura.svg'; 
import Swal from 'sweetalert2';
import './ProjectImg.css'; 


const ProjectImg = ({ onProjectClick, filterText }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'documentos'));
      const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, 'documentos', id));
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
        Swal.fire(
          'Eliminado!',
          'El proyecto ha sido eliminado.',
          'success'
        );
      }
    });
  };

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(filterText.toLowerCase()) ||
    project.description.toLowerCase().includes(filterText.toLowerCase()) ||
    (Array.isArray(project.categories) ? project.categories.some(category => category.toLowerCase().includes(filterText.toLowerCase())) : false) || 
    project.autor.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="projects-grid">
      {filteredProjects.map((project, index) => (
        <div
          className='grid-element'
          key={index}
          onClick={() => onProjectClick(project.title, project.iframeLink, project.description, project.categories, project.autor)}
        >
          <img src={project.imageUrl} alt="Uploaded file" className="uploaded-image" />
          <div className="hover-content">
            <p className="view-text">VIEW</p>
          </div>
          <h2 className='project-name'>{project.title}</h2>
          <p className='project-autor'>{project.autor}</p>
          <button className='delete-btn' onClick={(e) => { e.stopPropagation(); handleDelete(project.id); }}>
            <img src={basura} alt="Eliminar" className="basura-icon" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectImg;
