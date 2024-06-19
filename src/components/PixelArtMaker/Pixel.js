import React, { useState } from 'react';
import './Pixel.css';

function Pixel() {
  const [color, setColor] = useState('white');

  const handlePixelHover = () => {
    setColor('#333'); // Change color to black on hover
  };

  return (
    <div
      className="pixel"
      style={{ backgroundColor: color }}
      onMouseOver={handlePixelHover}
    />
  );
}

export default Pixel;
