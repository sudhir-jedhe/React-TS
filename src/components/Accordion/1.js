// a fully accessible accordion component in React with keyboard support according to ARIA specifications:

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpandedItemIndex(index);
    } else if (e.key === 'ArrowUp' && expandedItemIndex !== null) {
      e.preventDefault();
      setExpandedItemIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    } else if (e.key === 'ArrowDown' && expandedItemIndex !== null) {
      e.preventDefault();
      setExpandedItemIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div role="region" aria-labelledby="accordion-heading">
      <h2 id="accordion-heading" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        Accordion
      </h2>
      {items.map((item, index) => (
        <div key={index}>
          <button
            aria-expanded={expandedItemIndex === index ? 'true' : 'false'}
            aria-controls={`accordion-panel-${index}`}
            onClick={() => setExpandedItemIndex(index === expandedItemIndex ? null : index)}
            onKeyDown={e => handleKeyDown(e, index)}
            style={{ marginBottom: '5px' }}
          >
            {item.title}
          </button>
          <div
            id={`accordion-panel-${index}`}
            role="region"
            aria-labelledby={`accordion-heading-${index}`}
            hidden={expandedItemIndex !== index}
            style={{ marginTop: '5px' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;


import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const items = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  return (
    <div>
      <h1>Accessible Accordion</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;
