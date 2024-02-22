import React, { useState, useEffect, useRef } from "react";

export default function Loader({ id, completed, setCompleted }) {
  const animation = useRef(0);
  const [width, setWidth] = useState(0);

  const startAnimation = () => {
    animation.current = setTimeout(() => {
      if (completed === id - 1 && width !== 100) {
        setWidth((e) => {
          return e + 1;
        });
      }
      if (width > 99) {
        setCompleted(id);
      }
    }, 50);
  };
  useEffect(() => {
    startAnimation();
    return () => {
      clearTimeout(animation.current);
    };
  }, [completed, width]);
  return (
    <div
      style={{
        width: `70vw`,
        height: "10px",
        background: "#fff",
        border: "1.5px solid #000",
        margin: "1rem 0",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: "10px",
          background: "#3497DA",
        }}
      ></div>
    </div>
  );
}
