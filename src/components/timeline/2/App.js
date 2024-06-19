import React from 'react';
import Timeline from './Timeline';

function App() {
  const timelineItems = [
    {
      title: 'First Event',
      description: 'This is the description of the first event.',
      date: 'January 1, 2023'
    },
    {
      title: 'Second Event',
      description: 'This is the description of the second event.',
      date: 'February 15, 2023'
    },
    {
      title: 'Third Event',
      description: 'This is the description of the third event.',
      date: 'March 10, 2023'
    }
  ];

  return (
    <div className="App">
      <h1>React Timeline</h1>
      <Timeline items={timelineItems} />
    </div>
  );
}

export default App;
