import React, { useState } from 'react';
import Container from './Container';
import Controls from './Controls';
import { data } from './data';

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    const isSelected = selectedItems.includes(item);
    setSelectedItems(isSelected ? selectedItems.filter((i) => i !== item) : [...selectedItems, item]);
  };

  const handleMoveRight = () => {
    setRightItems([...rightItems, ...selectedItems]);
    setLeftItems(leftItems.filter((item) => !selectedItems.includes(item)));
    setSelectedItems([]);
  };

  const handleMoveLeft = () => {
    setLeftItems([...leftItems, ...selectedItems]);
    setRightItems(rightItems.filter((item) => !selectedItems.includes(item)));
    setSelectedItems([]);
  };

  return (
    <div className="flex justify-center mt-10">
      <Container title="Left Container" items={leftItems} selectedItems={selectedItems} onItemClick={handleItemClick} />
      <Controls onMoveRight={handleMoveRight} onMoveLeft={handleMoveLeft} />
      <Container title="Right Container" items={rightItems} selectedItems={[]} onItemClick={() => {}} />
    </div>
  );
};

export default TransferList;
