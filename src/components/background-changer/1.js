import React, { useState } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const App = () => {
  // State variables for red, green, and blue values
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // Function to update the body background color
  const updateBackgroundColor = () => {
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  // Variables for the opposite values of red, green, and blue
  const oppositeRed = 255 - red;
  const oppositeGreen = 255 - green;
  const oppositeBlue = 255 - blue;

  return (
    <div className="app">
      {/* Input elements for each color */}
      <label>
        Red:
        <input type="range" min="0" max="255" value={red} onChange={(e) => setRed(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Green:
        <input type="range" min="0" max="255" value={green} onChange={(e) => setGreen(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Blue:
        <input type="range" min="0" max="255" value={blue} onChange={(e) => setBlue(parseInt(e.target.value))} />
      </label>
      <br />
      {/* Display opposite text color */}
      <h1 style={{ color: `rgb(${oppositeRed}, ${oppositeGreen}, ${oppositeBlue})` }}>Opposite Text</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
