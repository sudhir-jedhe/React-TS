import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function App() {
  const [filled, setFilled] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <main>
      <div className="container">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (filled || hover) ? "on" : "off"}
              onClick={() => setFilled(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(filled)}
              onDoubleClick={() => {
                setHover("");
                setFilled("");
              }}
            >
              <FaStar size={50} />
            </button>
          );
        })}
        <p>{filled}</p>
      </div>
    </main>
  );
}
