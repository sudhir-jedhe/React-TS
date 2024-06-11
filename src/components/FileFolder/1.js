import React, { useState } from 'react';
import { data } from './data'; // Import your data object here

const Folder = ({ files }) => {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const toggleFolder = (folderName) => {
    if (expandedFolders.includes(folderName)) {
      setExpandedFolders(expandedFolders.filter((folder) => folder !== folderName));
    } else {
      setExpandedFolders([...expandedFolders, folderName]);
    }
  };

  const renderFileIcon = (fileName) => {
    const extension = fileName.split('.').pop();
    // Map file extensions to their corresponding icons
    const iconMap = {
      js: 'JavaScriptIcon', // Add more file extensions and icons here
      css: 'CSSIcon',
      html: 'HTMLIcon',
      // Add more file types as needed
    };
    const icon = iconMap[extension] || 'DefaultIcon'; // Default icon if extension not found
    return <i className={`file-icon ${icon}`} />;
  };

  return (
    <ul className="folder">
      {Object.entries(files).map(([name, file]) => (
        <li key={name}>
          <div className="file" onClick={() => file.isFolder && toggleFolder(name)}>
            {file.isFolder && <i className={`folder-icon ${expandedFolders.includes(name) ? 'open' : 'closed'}`} />}
            {renderFileIcon(name)}
            <span>{name}</span>
          </div>
          {file.isFolder && expandedFolders.includes(name) && <Folder files={file.children} />}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="App">
      <Folder files={data} />
    </div>
  );
};

export default App;
