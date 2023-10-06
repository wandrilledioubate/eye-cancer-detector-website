import React, { useState, useRef } from 'react';
import './ImageUploader.css';

const ImageUploader = () => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const uploadedFiles = Array.from(e.dataTransfer.files).filter(
            (file) => file.type === "image/png"
        );
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const handleFileInput = (e) => {
        const uploadedFiles = Array.from(e.target.files).filter(
            (file) => file.type === "image/png"
        );
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const handleAnalyzeClick = () => {
        // Pour l'instant, nous allons simplement afficher les noms des fichiers dans la console.
        // Plus tard, nous pouvons remplacer cela par un appel API.
        files.forEach(file => {
            console.log(`Sending ${file.name} to the API for analysis...`);
        });
    };

    return (
        <div className="uploader-wrapper">
            <div className="uploader-container">
                <div 
                    className="dropzone" 
                    onDragOver={handleDragOver} 
                    onDrop={handleDrop}
                >
                    
                    <div className='drag-text'>
                        <p>Drag files to upload 📁</p>
                    </div>
                    <div className='drag-or'>
                        <p>or</p>
                    </div>
                    <div className='drag-size'>
                        <p>Max file size: 50MB</p>
                    </div>
                    <div className='drag-type'>
                        <p>Supported file type: PNG</p>
                    </div>

                    <button onClick={() => fileInputRef.current.click()}>Browse Files</button>
                    <input 
                        ref={fileInputRef}
                        type="file" 
                        accept=".png" 
                        multiple 
                        onChange={handleFileInput} 
                        style={{ display: 'none' }}
                    />
                </div>
                <div className="uploaded-files">
                    {files.map((file, index) => (
                        <div key={index} className="file-info">
                            <span>{file.name}</span>
                            <span>{(file.size / 1024).toFixed(2)} KB</span>
                            {/* Here, you can add a progress bar for file upload if needed */}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleAnalyzeClick} className="analyze-button">Analyse the picture 🔬</button>
        </div>
    );
};

export default ImageUploader;
