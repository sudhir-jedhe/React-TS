// Build a component that allows transferring of items between two lists, bulk selection/unselection of items, and adding of new items
// omponent that includes bulk selection/unselection of items and the ability to add new items:

import React, { useState } from 'react';

const TransferListWithBulkSelection = () => {
  const [leftItems, setLeftItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [rightItems, setRightItems] = useState([]);
  const [leftSelectedItems, setLeftSelectedItems] = useState([]);
  const [rightSelectedItems, setRightSelectedItems] = useState([]);
  const [newItemInput, setNewItemInput] = useState('');

  const handleSelectItem = (item, listType) => {
    if (listType === 'left') {
      setLeftSelectedItems(prevSelected => prevSelected.includes(item) ? prevSelected.filter(i => i !== item) : [...prevSelected, item]);
    } else {
      setRightSelectedItems(prevSelected => prevSelected.includes(item) ? prevSelected.filter(i => i !== item) : [...prevSelected, item]);
    }
  };

  const handleBulkSelect = (listType) => {
    if (listType === 'left') {
      setLeftSelectedItems(leftItems);
    } else {
      setRightSelectedItems(rightItems);
    }
  };

  const handleBulkUnselect = (listType) => {
    if (listType === 'left') {
      setLeftSelectedItems([]);
    } else {
      setRightSelectedItems([]);
    }
  };

  const handleAddNewItem = () => {
    if (newItemInput.trim() !== '') {
      setLeftItems(prevItems => [...prevItems, newItemInput]);
      setNewItemInput('');
    }
  };

  const handleTransfer = (fromList, toList, items) => {
    const updatedFromList = fromList.filter(item => !items.includes(item));
    const updatedToList = [...toList, ...items];
    if (fromList !== leftItems) {
      setLeftItems(updatedFromList);
      setRightItems(updatedToList);
      setRightSelectedItems([]);
    } else {
      setRightItems(updatedFromList);
      setLeftItems(updatedToList);
      setLeftSelectedItems([]);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <h3>Left List</h3>
        <button onClick={() => handleBulkSelect('left')}>Select All</button>
        <button onClick={() => handleBulkUnselect('left')}>Unselect All</button>
        <ul>
          {leftItems.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={leftSelectedItems.includes(item)} onChange={() => handleSelectItem(item, 'left')} />
              {item}
            </li>
          ))}
        </ul>
        <input type="text" value={newItemInput} onChange={e => setNewItemInput(e.target.value)} />
        <button onClick={handleAddNewItem}>Add New Item</button>
      </div>
      <div>
        <h3>Right List</h3>
        <button onClick={() => handleBulkSelect('right')}>Select All</button>
        <button onClick={() => handleBulkUnselect('right')}>Unselect All</button>
        <ul>
          {rightItems.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={rightSelectedItems.includes(item)} onChange={() => handleSelectItem(item, 'right')} />
              {item}
            </li>
          ))}
        </ul>
        <button onClick={() => handleTransfer(leftItems, rightItems, leftSelectedItems)}>Move Selected to Right</button>
        <button onClick={() => handleTransfer(rightItems, leftItems, rightSelectedItems)}>Move Selected to Left</button>
      </div>
    </div>
  );
};

export default TransferListWithBulkSelection;
