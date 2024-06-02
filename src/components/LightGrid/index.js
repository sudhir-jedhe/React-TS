import React, { useState } from 'react';

const LightsGrid = ({ rows, columns }) => {
  const [activeLights, setActiveLights] = useState([]);

  const toggleLight = (row, column) => {
    const index = activeLights.findIndex(light => light.row === row && light.column === column);
    if (index !== -1) {
      setActiveLights(prevLights => prevLights.filter((_, i) => i !== index));
    } else {
      setActiveLights(prevLights => [...prevLights, { row, column }]);
    }
  };

  const deactivateLights = () => {
    setActiveLights([]);
  };

  return (
    <div>
      <button onClick={deactivateLights}>Deactivate All</button>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 30px)`, gridGap: '5px' }}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: activeLights.some(light => light.row === rowIndex && light.column === colIndex) ? 'yellow' : 'grey',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => toggleLight(rowIndex, colIndex)}
            />
          ))
        ))}
      </div>
    </div>
  );
};

export default LightsGrid;



import React from 'react';
import LightsGrid from './LightsGrid';

const App = () => {
  return (
    <div>
      <h1>Lights Grid</h1>
      <LightsGrid rows={5} columns={5} />
    </div>
  );
};

export default App;
