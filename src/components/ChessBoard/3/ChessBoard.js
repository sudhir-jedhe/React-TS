import React from 'react';
import './Chessboard.css'; // CSS for styling

const Chessboard = () => {
  const gridSize = 8; // Size of the chessboard (8x8)
  const board = [];

  // Loop to generate chessboard rows
  for (let row = 0; row < gridSize; row++) {
    const cells = [];
    // Loop to generate cells in each row
    for (let col = 0; col < gridSize; col++) {
      // Determine cell color based on row and column index
      const cellColor = (row + col) % 2 === 0 ? 'white' : 'black';
      cells.push(<div key={`${row}-${col}`} className={`cell ${cellColor}`}></div>);
    }
    // Create a row div with cells
    board.push(<div key={row} className="row">{cells}</div>);
  }

  return (
    <div className="chessboard">
      {board}
    </div>
  );
};

export default Chessboard;
