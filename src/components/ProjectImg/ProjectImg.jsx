import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const ProjectImg = ({ onProjectClick }) => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const imagesListRef = ref(storage, 'images/');
        
        listAll(imagesListRef).then((response) => {
            const urls = response.items.map((item) =>
                getDownloadURL(item)
            );
  
            Promise.all(urls).then((urls) => {
                setImageUrls(urls);
            });
        });
    }, []);

    return (
        <div className="projects-grid">
            {imageUrls.map((url, index) => (
                <div
                    className='grid-element'
                    key={index}
                    onClick={() => onProjectClick("Tour publicity")} // Puedes pasar un identificador más específico si tienes uno
                >
                    <img src={url} alt="Uploaded file" className="uploaded-image" />
                    <div className="hover-content">
                        <p className="view-text">VIEW</p>
                    </div>
                    <h4 className='project-name'>Tour publicity</h4>
                </div>
            ))}
        </div>
    );
};

export default ProjectImg;
