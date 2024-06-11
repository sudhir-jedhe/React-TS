import React, { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = React.useState(false);

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
      <Toaster />
    </div>
  );
};

export default MyComponent;
