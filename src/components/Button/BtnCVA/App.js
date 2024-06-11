import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button type="primary" size="small" onClick={() => console.log('Primary Button Clicked')}>Primary Small</Button>
      <Button type="outline" size="small" onClick={() => console.log('Outline Button Clicked')}>Outline Small</Button>
      <Button type="destructive" size="small" onClick={() => console.log('Destructive Button Clicked')}>Destructive Small</Button>
      <Button type="primary" size="medium" onClick={() => console.log('Primary Button Clicked')}>Primary Medium</Button>
      <Button type="outline" size="medium" onClick={() => console.log('Outline Button Clicked')}>Outline Medium</Button>
      <Button type="destructive" size="medium" onClick={() => console.log('Destructive Button Clicked')}>Destructive Medium</Button>
    </div>
  );
};

export default App;
