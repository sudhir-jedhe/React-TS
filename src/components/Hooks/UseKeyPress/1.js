import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPress;


import React from 'react';
import { useKeyPress } from './useKeyPress'; // Import your custom hook
import { toast } from 'react-hot-toast';

const MyComponent = () => {
  const shiftPressed = useKeyPress('Shift');
  const enterPressed = useKeyPress('Enter');

  useEffect(() => {
    if (shiftPressed && enterPressed) {
      toast.success('Shift + Enter combination pressed!');
    }
  }, [shiftPressed, enterPressed]);

  return (
    <div>
      <h1>Press Shift + Enter</h1>
    </div>
  );
};

export default MyComponent;
