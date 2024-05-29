import React, { useState, useEffect } from 'react';
import './Publish.css';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import basura from '../../assets/basura.svg'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'



export function Publish() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [description, setDescription] = useState('');
  const [autor, setAutor] = useState('');
  const [iframeLink, setIframeLink] = useState('');
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]); 
  const [options, setOptions] = useState({
    diseño: false,
    publicidad: false,
    branding: false,
  });


  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile) {
      const objectURL = URL.createObjectURL(uploadedFile);
      setFileURL(objectURL);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      const objectURL = URL.createObjectURL(droppedFile);
      setFileURL(objectURL);
    }
  };

  useEffect(() => {
    return () => {
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
    };
  }, [fileURL]);

  const uploadFile = async () => {
    if (file == null) return;
    const imageRef = ref(storage, `images/${file.name + uuidv4()}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    
    const selectedCategories = Object.keys(options).filter(key => options[key]);
    
    await addDoc(collection(db, 'documentos'), {
      title,
      description,
      imageUrl: url,
      autor,
      iframeLink,
      categories: selectedCategories,
    });
    
    console.log('Data added to Firestore:', { title, description, imageUrl: url, autor, iframeLink, categories: selectedCategories });
  };
  
  

  const handleSubmit = () => {
    if (title && description && file && autor && iframeLink && categories) {
      uploadFile();
    }
    Swal.fire({
      title: 'Tu proyecto ha sido publicado',
      text: 'Revisa proyectos para verlo',
      icon: 'success',
      iconColor: '#0164FF',
      confirmButtonText: 'Ir a proyectos',
      showCancelButton: true,
      cancelButtonText: 'Subir nuevo proyecto'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/proyectos')
      }else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        window.location.reload(); 
      }
    })

    console.log('Title:', title);
    console.log('File:', file ? file.name : 'No file');
    console.log('Description:', description);
    console.log('Autor:', autor);
    console.log('Behance:', iframeLink);
    console.log('Categories:', categories);
  };

  const handleSave = () => {  
    console.log('Title saved as draft:', title);
    console.log('File saved as draft:', file ? file.name : 'No file');
    console.log('Description saved as draft:', description);
    console.log('Autor saved as draft:', autor);
    console.log('Behance saved as draft:', iframeLink);
    console.log('Categories saved as draft:', categories);

  };

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setOptions(prevOptions => ({
      ...prevOptions,
      [name]: checked
    }));
  };

  return (
    <div className="publish-container">
      <h1 className='title-publish'>PUBLISH</h1>
      <div className="publish-content">
        <div className="publish-field">
          <input
            type="text"
            id="title"
            placeholder="TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="upload-field" 
        onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave} 
        onDrop={handleDrop}>

            {file === null && (
              <>
                <p>Upload media or drag files</p>
                <label htmlFor="file-upload" className="file-upload-btn">UPLOAD</label>
                <input type="file" 
                  id="file-upload" 
                  accept="image/*" 
                  onChange={handleFileUpload} 
                  style={{ display: 'none' }} />
              </>
            )}
            
            {file && (
              <div className="file-details">
                <p>Filename: {file.name}</p>
                <p>Type: {file.type}</p>
                <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                {fileURL && <img src={fileURL} alt="Preview" className="file-preview" />}
                <button className='eliminar' onClick={() => setFile(null)}>
                  <img src={basura} alt="Eliminar" className="basura-icon" />
                </button>
              </div>
            )}
          </div>


        <div className="publish-field">
          <input
            type="text"
            id="description"
            placeholder="DESCRIPTION"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="publish-field ">
          <input
            type="text"
            id="autor"
            placeholder="AUTOR"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <div className="publish-field ">
          <input
            type="text"
            id="behance"
            placeholder="BEHANCE"
            value={iframeLink}
            onChange={(e) => setIframeLink(e.target.value)}
          />
        </div>

        <div className="options-container">
        <label className='tiposTitle'>TIPO DE CATEGORIA</label>
            <div>
              <input
                type="checkbox"
                id="diseño"
                name="diseño"
                checked={options.diseño}
                onChange={handleOptionChange}
              />
              <label htmlFor="diseño">Diseño</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="publicidad"
                name="publicidad"
                checked={options.publicidad}
                onChange={handleOptionChange}
              />
              <label htmlFor="publicidad">Publicidad</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="branding"
                name="branding"
                checked={options.branding}
                onChange={handleOptionChange}
              />
              <label htmlFor="branding">Branding</label>
            </div>
        </div>
        
      </div>
      <div className="buttons-wrapper">
      <button
          className={`btn1 ${title && description && file && autor &&iframeLink? 'enabled' : 'disabled'}`}
          onClick={handleSubmit}
          disabled={!title || !description || !file ||!autor ||!iframeLink }
        >
          PUBLISH
        </button>
        <button className='btn2' onClick={handleSave}>SAVE AS DRAFT</button>
      </div>
      </div>
  );
}