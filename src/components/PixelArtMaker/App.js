import React, { useState } from 'react';
import Pixel from './Pixel';
import './App.css';

function App() {
  const [gridSize, setGridSize] = useState(16);

  const handleGridSizeChange = (e) => {
    setGridSize(e.target.value);
  };

  const generateGrid = () => {
    const pixels = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      pixels.push(<Pixel key={i} />);
    }
    return pixels;
  };

  return (
    <div className="app">
      <h1>Pixel Art Maker</h1>
      <div className="controls">
        <label htmlFor="grid-size">Grid Size:</label>
        <input
          type="number"
          id="grid-size"
          min="1"
          value={gridSize}
          onChange={handleGridSizeChange}
        />
        <button onClick={generateGrid}>Generate Grid</button>
      </div>
      <div className="pixel-grid">
        {generateGrid()}
      </div>
    </div>
  );
}

export default App;
