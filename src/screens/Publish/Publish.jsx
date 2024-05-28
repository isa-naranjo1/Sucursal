import React, { useState, useEffect } from 'react';
import './Publish.css';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

export function Publish() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [description, setDescription] = useState('');

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
    await addDoc(collection(db, 'projects'), {
      title,
      description,
      imageUrl: url,
    });
    console.log('Data added to Firestore:', { title, description, imageUrl: url });
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('File:', file ? file.name : 'No file');
    console.log('Description:', description);
    uploadFile();
  };

  const handleSave = () => {
    console.log('Title saved as draft:', title);
    console.log('File saved as draft:', file ? file.name : 'No file');
    console.log('Description saved as draft:', description);
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

        <div
          className="upload-field"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p>Upload media or drag files</p>
          <label htmlFor="file-upload" className="file-upload-btn">UPLOAD</label>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />

          {file && (
            <div className="file-details">
              <p>Filename: {file.name}</p>
              <p>Type: {file.type}</p>
              <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
              {fileURL && (
                <img src={fileURL} alt="Preview" className="file-preview" />
              )}
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
      </div>
      <div className="buttons-wrapper">
        <button className='btn1' onClick={handleSubmit}>PUBLISH</button>
        <button className='btn2' onClick={handleSave}>SAVE AS DRAFT</button>
      </div>
    </div>
  );
}