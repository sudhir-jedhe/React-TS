import { useState } from "react";

export default function App() {
  const [mouseStatus, setMouseStatus] = useState({ x: 0, y: 0 });

  function changeMouseState(e) {
    setMouseStatus({ x: e.clientX, y: e.clientY });
  }

  return (
    <main onPointerMove={(e) => changeMouseState(e)}>
      <div
        className="reddot"
        style={{
          transform: `translate(${mouseStatus.x}px , ${mouseStatus.y}px)`,
        }}
      ></div>
    </main>
  );
}
