import React, { useState } from 'react';

const directories = [
  {
    id: 1,
    title: 'src',
    directories: [
      {
        id: 2,
        title: 'formapp',
        directories: [
          {
            id: 3,
            title: 'controllers',
            directories: [
              {
                id: 12,
                title: 'FormViewController.js',
                directories: []
              },
              {
                id: 13,
                title: 'FormViewController.ts',
                directories: []
              }
            ]
          },
        ]
      },
      {
        id: 8,
        title: 'Nested Comment 3 Depth 1',
        directories: []
      }
    ]
  },
  {
    id: 9,
    title: 'Second Comment',
    directories: [
      {
        id: 10,
        title: 'Nested Comment 4 Depth 1',
        directories: []
      },
    ]
  }
];

function Directory({ directory }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={toggleOpen}>
                {directory.title}
            </div>
            {isOpen && directory.directories.map(subDirectory => (
                <Directory key={subDirectory.id} directory={subDirectory} />
            ))}
        </div>
    );
}

function App() {
    return (
        <div>
            {directories.map(directory => (
                <Directory key={directory.id} directory={directory} />
            ))}
        </div>
    );
}

export default App;
