import React from 'react';
import TabList from './TabList';

const App = () => {
  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content of Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content of Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content of Tab 3' },
  ];

  return (
    <div>
      <h1>Tablist Example</h1>
      <TabList tabs={tabs} />
    </div>
  );
};

export default App;
