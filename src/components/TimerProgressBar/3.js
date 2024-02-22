import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const GRAPHIC_URL =
  "https://ik.imagekit.io/devtoolstech/devtools-tech-banner_QuoILF3fK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643016588956";

const TOTAL_TIME_IN_SEC = 80;
export default function App() {
  const [time, setTime] = useState(TOTAL_TIME_IN_SEC);
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = window.setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => timeRef && window.clearInterval(timeRef.current);
  }, []);

  useEffect(() => {
    if (time < 1) {
      clearInterval(timeRef.current);
    }
  }, [time]);

  return (
    <main>
      <section id="graphic">
        <img src={GRAPHIC_URL} alt="Devtools Tech Banner" />
      </section>
      <section id="content">
        <h1>Devtools Tech</h1>
        <p>
          Devtools Tech is the leading platform for Frontend Engineers to
          enhance their skills, expand their knowledge, and prepare for
          technical interviews.
        </p>
        <h3>Loading devtools</h3>
        <h4>{`${time} seconds...`}</h4>
        <div className="progressRoot">
          <div
            style={{ width: `${100 - (time / TOTAL_TIME_IN_SEC) * 100}%` }}
            className="progressSpan"
          />
        </div>
      </section>
    </main>
  );
}
