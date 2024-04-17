import React, { useState } from "react";

const ChessBoard = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const handleClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const isDiagonal = (row, col) => {
    if (!selectedCell) return false;
    const { row: selectedRow, col: selectedCol } = selectedCell;
    return Math.abs(row - selectedRow) === Math.abs(col - selectedCol);
  };

  return (
    <div>
      {[...Array(8)].map((_, row) => (
        <div key={row} style={{ display: "flex" }}>
          {[...Array(8)].map((_, col) => (
            <div
              key={col}
              onClick={() => handleClick(row, col)}
              style={{
                width: 50,
                height: 50,
                backgroundColor: (row + col) % 2 === 0 ? "white" : "black",
                border: isDiagonal(row, col) ? "3px solid red" : "none",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
