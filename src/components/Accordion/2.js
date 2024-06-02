// Build an accordion component that a displays a list of vertically stacked sections with each containing a title and content snippet

import React, { useState } from 'react';

const Accordion = ({ sections }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = index => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <button
            style={{
              backgroundColor: expandedIndex === index ? '#007bff' : '#eee',
              color: expandedIndex === index ? '#fff' : '#000',
              padding: '10px',
              borderRadius: '5px',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => handleToggle(index)}
          >
            {section.title}
          </button>
          {expandedIndex === index && (
            <div style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px', marginTop: '5px' }}>
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;


import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const sections = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion sections={sections} />
    </div>
  );
};

export default App;
