import React, { useState, useRef } from "react";
import "./style.css";
import { board, make2dcopy } from "./board/board";

export default function App() {
  const [fields, setFields] = useState(make2dcopy(board));

  const changeColor = (row, column) => {
    const updatedFields = [...fields];
    updatedFields[row][column] = "red";
    setFields(updatedFields);
  };
  const resetField = () => {
    setFields(make2dcopy(board));
  };
  const diagnoltopleft = (row, column) => {
    if (row >= 0 && column >= 0) {
      changeColor(row, column);
      diagnoltopleft(row - 1, column - 1);
    }
  };
  const diagnolbottomright = (row, column) => {
    if (row <= 7 && column <= 7) {
      changeColor(row, column);
      diagnolbottomright(row + 1, column + 1);
    }
  };
  const diagnolbottomleft = (row, column) => {
    if (row <= 7 && column >= 0) {
      changeColor(row, column);
      diagnolbottomleft(row + 1, column - 1);
    }
  };
  const diagnoltopright = (row, column) => {
    if (row >= 0 && column <= 7) {
      changeColor(row, column);
      diagnoltopright(row - 1, column + 1);
    }
  };
  return (
    <div>
      {console.log(board)}
      <div className="field-container">
        {fields.map((e, row) => {
          return e.map((e1, column) => {
            return (
              <div
                className="field"
                key={row + column}
                style={{ background: `${e1}` }}
                onClick={() => {
                  resetField();
                  diagnoltopleft(row, column);
                  diagnoltopright(row, column);
                  diagnolbottomright(row, column);
                  diagnolbottomleft(row, column);
                }}
              ></div>
            );
          });
        })}
      </div>
      <div className="btn" onClick={resetField}>
        clear
      </div>
    </div>
  );
}
