import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const LinkPreviewer = ({ url, children }) => {
  const [preview, setPreview] = useState(null); // State to store the preview image

  // Function to fetch screenshot of the website using Microlink API
  const fetchPreview = async () => {
    try {
      const response = await axios.get(`https://api.microlink.io?url=${url}&screenshot=true`);
      setPreview(response.data.data.screenshot.url); // Set the preview image URL
    } catch (error) {
      console.error('Error fetching preview:', error);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Display children */}
      {children}
      {/* Preview component */}
      {preview && (
        <div style={{ position: 'absolute', top: '100%', left: 0 }}>
          <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100vh' }} />
        </div>
      )}
      {/* Trigger preview on hover */}
      <div
        onMouseEnter={fetchPreview}
        onMouseLeave={() => setPreview(null)}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></div>
    </div>
  );
};

export default LinkPreviewer;
