//  a component that allows transferring items between two lists in React:

import React, { useState } from 'react';

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [rightItems, setRightItems] = useState([]);

  const handleTransfer = (fromList, toList, item) => {
    const updatedFromList = fromList.filter(i => i !== item);
    const updatedToList = [...toList, item];
    if (fromList !== leftItems) {
      setLeftItems(updatedFromList);
      setRightItems(updatedToList);
    } else {
      setRightItems(updatedFromList);
      setLeftItems(updatedToList);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <h3>Left List</h3>
        <ul>
          {leftItems.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleTransfer(leftItems, rightItems, item)}>Move to Right</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Right List</h3>
        <ul>
          {rightItems.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleTransfer(rightItems, leftItems, item)}>Move to Left</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;


import React from 'react';
import TransferList from './TransferList';

const App = () => {
  return (
    <div>
      <h1>Transfer Items Between Lists</h1>
      <TransferList />
    </div>
  );
};

export default App;
