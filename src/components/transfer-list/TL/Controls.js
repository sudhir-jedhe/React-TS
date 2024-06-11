import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';

const Controls = ({ onMoveRight, onMoveLeft }) => {
  return (
    <div className="mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={onMoveRight}>
        <ChevronRightIcon className="h-5 w-5" />
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onMoveLeft}>
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Controls;
