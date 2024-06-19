import { useEffect, useState, useRef } from "react";

export function useActive(time) {
  const [active, setActive] = useState(false);
  const timer = useRef();
  const events = ["keypress", "mousemove", "touchmove", "click", "scroll"];

  useEffect(() => {
    const handleEvent = () => {
      setActive(true);

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        setActive(false);
      }, time);
    };

    events.forEach((event) => document.addEventListener(event, handleEvent));

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleEvent);
      });
    };
  }, []);

  return active;
}


import "./App.css";
import { useActive } from "./hooks/useActiveHook";

function App() {
  const active = useActive(1000);

  return (
    <div className="App">
      <div className={active ? "active" : "inactive"}>
        {active ? "user active" : "user is inactive"}
      </div>
    </div>
  );
}

export default App;