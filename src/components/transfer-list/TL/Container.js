import React from 'react';
import Checkbox from './Checkbox';

const Container = ({ title, items, selectedItems, onItemClick }) => {
  return (
    <div className="border border-gray-300 p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {items.map((item, index) => (
        <Checkbox
          key={index}
          label={item}
          checked={selectedItems.includes(item)}
          onChange={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

export default Container;
