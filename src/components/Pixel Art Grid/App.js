import React, { useState, useRef } from "react";
import "./style.css";
import { boarddata } from "./data/boardData";
export default function App() {
  const [fields, setFields] = useState(boarddata);
  const defaultData = useRef(boarddata);
  const [isDragging, setIsDragging] = useState(false);

  const clearFields = () => {
    setFields(defaultData.current);
  };

  const changeColor = (id) => {
    const updatedFields = fields.map((e) => {
      if (e.id === id) {
        return { ...e, color: "#A8BBD9" };
      } else {
        return e;
      }
    });
    setFields(updatedFields);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseOver = (id) => {
    if (isDragging) {
      changeColor(id);
    }
  };
  return (
    <div className="field-container">
      {fields.map((e) => {
        return (
          <div
            key={e.id}
            className="field"
            style={{ background: `${e.color}` }}
            onClick={() => {
              changeColor(e.id);
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOver={() => {
              handleMouseOver(e.id);
            }}
            draggable={false}
          ></div>
        );
      })}
      <a className="btn" onClick={clearFields}>
        clear
      </a>
    </div>
  );
}
