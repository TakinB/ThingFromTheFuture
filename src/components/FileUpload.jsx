import React from 'react';
// import './FileUpload.css'
function FileUpload() {
    
    const handleUpload =() => {
alert("File uploaded")
    };
    return (
      <div className="uploadFile">
          <form onSubmit={handleUpload}>
            <h1>Upload a file</h1>
            <input type="file" />
            <button type="submit">Upload</button>
          </form>
      </div>
    );
  }
export default FileUpload;