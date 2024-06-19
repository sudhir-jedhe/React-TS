import React, { useState } from 'react';

const TabList = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // Default to the first tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tablist-container">
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`tab ${tab.id === activeTab ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`tab-pane ${tab.id === activeTab ? 'active-tab-pane' : ''}`}
          >
            {/* Render tab content here */}
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabList;
