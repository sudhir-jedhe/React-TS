import React, { useState } from 'react';

const OrderTabList = () => {
  const [activeTab, setActiveTab] = useState('orders'); // Default to 'Orders'

  const tabs = [
    { id: 'orders', label: 'Orders' },
    { id: 'buyAgain', label: 'Buy Again' },
    { id: 'notShipped', label: 'Not Yet Shipped' },
    { id: 'cancelled', label: 'Cancelled Orders' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'orders':
        return <div>Content of Orders Tab</div>;
      case 'buyAgain':
        return <div>Content of Buy Again Tab</div>;
      case 'notShipped':
        return <div>Content of Not Yet Shipped Tab</div>;
      case 'cancelled':
        return <div>Content of Cancelled Orders Tab</div>;
      default:
        return null;
    }
  };

  return (
    <div className="order-tablist-container">
      <div className="tablist">
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
        {renderTabContent()}
      </div>
    </div>
  );
};

export default OrderTabList;
