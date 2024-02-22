import React, { useState } from "react";

const FileExplorer = ({ initialFiles }) => {
  const [files, setFiles] = useState(initialFiles);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleFolderClick = (folder) => {
    if (!folder.childrenLoaded) {
      // Simulate fetching additional files from the backend
      // Replace this with your actual API call
      setTimeout(() => {
        const updatedFiles = files.map((item) => {
          if (item.type === "folder" && item.id === folder.id) {
            return {
              ...item,
              isOpen: !item.isOpen,
              childrenLoaded: true,
              children: [
                { id: 5, name: "Subfile 1", type: "file", size: "8 KB" },
                { id: 6, name: "Subfile 2", type: "file", size: "12 KB" },
              ],
            };
          }
          return item;
        });
        setFiles(updatedFiles);
      }, 500); // Simulated loading delay
    } else {
      // Toggle the folder's open state if children are already loaded
      const updatedFiles = files.map((item) => {
        if (item.type === "folder" && item.id === folder.id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      });
      setFiles(updatedFiles);
    }
  };

  return (
    <div className="file-explorer">
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
            {file.isOpen && file.type === "folder" && file.childrenLoaded && (
              <div className="subfiles">
                <FileExplorer initialFiles={file.children} />
              </div>
            )}
            {file.isOpen && file.type === "folder" && !file.childrenLoaded && (
              <div className="loading">Loading...</div>
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

export default FileExplorer;
