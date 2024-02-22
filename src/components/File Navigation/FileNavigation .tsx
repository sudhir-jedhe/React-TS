import React, { useState } from "react";

const FileNavigation = ({ initialFiles }) => {
  const [files, setFiles] = useState(initialFiles);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleFolderClick = (folder) => {
    // Implement logic to fetch files inside the folder from the backend
    // For demonstration, we'll just toggle the folder's open state
    const updatedFiles = files.map((item) => {
      if (item.type === "folder" && item.id === folder.id) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setFiles(updatedFiles);
  };

  return (
    <div className="file-navigation">
      <div className="folders">
        {files.map((file) => (
          <div key={file.id}>
            {file.type === "folder" && (
              <div>
                <span onClick={() => handleFolderClick(file)}>
                  {file.isOpen ? "▼" : "►"}
                </span>
                <span>{file.name}</span>
              </div>
            )}
            {file.type === "file" && (
              <div>
                <span onClick={() => handleFileClick(file)}>{file.name}</span>
              </div>
            )}
            {file.isOpen && file.type === "folder" && (
              <div className="subfiles">
                <FileNavigation initialFiles={file.children} />
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedFile && (
        <div className="file-details">
          <h3>{selectedFile.name}</h3>
          <p>{selectedFile.size}</p>
          {/* Add more file details as needed */}
        </div>
      )}
    </div>
  );
};

export default FileNavigation;

import React from "react";
import FileNavigation from "./FileNavigation";

const App = () => {
  const initialFiles = [
    {
      id: 1,
      name: "Folder 1",
      type: "folder",
      isOpen: false,
      children: [
        { id: 2, name: "File 1", type: "file", size: "10 KB" },
        { id: 3, name: "File 2", type: "file", size: "15 KB" },
      ],
    },
    { id: 4, name: "File 3", type: "file", size: "5 KB" },
  ];

  return (
    <div>
      <h1>File Navigation Example</h1>
      <FileNavigation initialFiles={initialFiles} />
    </div>
  );
};

export default App;
