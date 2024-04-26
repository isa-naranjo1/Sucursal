import React, { useState, useEffect } from 'react';
import './Publish.css';

export function Publish() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null); // Para almacenar la URL de vista previa
  const [description, setDescription] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile) {
      const objectURL = URL.createObjectURL(uploadedFile); // Crear URL de vista previa
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
    // Limpiar el URL temporal cuando el componente se desmonte o el archivo cambie
    return () => {
      if (fileURL) {
        URL.revokeObjectURL(fileURL); // Limpiar la memoria
      }
    };
  }, [fileURL]);

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('File:', file ? file.name : 'No file');
    console.log('Description:', description);
    // Aquí es donde manejarías el envío a tu backend o almacenamiento
  };

  const handleSave = () => {
    console.log('Title saved as draft:', title);
    console.log('File saved as draft:', file ? file.name : 'No file');
    console.log('Description saved as draft:', description);
    // Aquí es donde manejarías el envío a tu backend o almacenamiento
  };

  return (
    <div className="publish-container">
      <h1>PUBLISH</h1>
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

        <div
          className="upload-field"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label htmlFor="file-upload" className="file-upload-btn">Upload</label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <p>Drag and drop a pic here or click to upload</p>
        </div>

        {file && (
          <div className="file-details">
            <p>Filename: {file.name}</p>
            <p>Type: {file.type}</p>
            <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
            {fileURL && (
              <img src={fileURL} alt="Preview" className="file-preview" /> // Vista previa de la imagen
            )}
          </div>
        )}

        <div className="publish-field">
          <input
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className='botones'>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleSave}>Save as draft</button>
      </div>
    </div>
  );
}
