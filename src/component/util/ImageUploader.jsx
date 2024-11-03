import React, { useState } from 'react';

function ImageUploader() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        {preview ? (
          <img src={preview} alt="preview" style={{ width: '100%', height: '100%' }} />
        ) : (
          <p>No Image</p>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={() => alert("등록되었습니다!")}>등록</button>
    </div>
  );
}

export default ImageUploader;
