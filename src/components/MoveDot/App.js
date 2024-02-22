import { useState } from "react";

export default function App() {
  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });
  return (
    <main
      onPointerMove={(e) => {
        setCoordinate({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        className="dot"
        style={{ transform: `translate(${coordinate.x}px,${coordinate.y}px)` }}
      />
    </main>
  );
}

/**************** */

// main {
//     width: 100vw;
//     height: 100vh;
//     position: relative;
//   }

//   .dot{
//     background: red;
//     height: 50px;
//     width: 50px;
//     border-radius: 50%;
//     position: absolute;
//     top:-25px;
//     left: -25px;
//   }

/********************* */
