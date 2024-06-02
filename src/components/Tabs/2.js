import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index ? 'true' : 'false'}
            onClick={() => handleTabClick(index)}
            tabIndex={activeTab === index ? '0' : '-1'}
            style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: activeTab === index ? '#007bff' : '#eee', color: activeTab === index ? '#fff' : '#000', borderRadius: '5px' }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;



import React from 'react';
import Tabs from './Tabs';

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: <div>This is the content of Tab 1</div> },
    { title: 'Tab 2', content: <div>This is the content of Tab 2</div> },
    { title: 'Tab 3', content: <div>This is the content of Tab 3</div> },
  ];

  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;


/************************************* */

import React, { useState, useRef, useEffect } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    // Initialize tabRefs
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs]);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  const handleKeyDown = e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const direction = e.key === 'ArrowRight' ? 1 : -1;
      const newIndex = (activeTab + direction + tabs.length) % tabs.length;
      setActiveTab(newIndex);
      tabRefs.current[newIndex].focus();
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <div role="tablist" ref={tabListRef}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index ? 'true' : 'false'}
            tabIndex={activeTab === index ? '0' : '-1'}
            onClick={() => handleTabClick(index)}
            ref={el => (tabRefs.current[index] = el)}
            style={{
              marginRight: '10px',
              padding: '5px 10px',
              backgroundColor: activeTab === index ? '#007bff' : '#eee',
              color: activeTab === index ? '#fff' : '#000',
              borderRadius: '5px',
            }}
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`panel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== index}
          style={{ display: activeTab === index ? 'block' : 'none' }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
