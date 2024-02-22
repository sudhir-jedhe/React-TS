import React, { useState, useRef } from "react";
import "./style.css";
import Loader from "./Loader";
export default function App() {
  const [loaderList, setLoaderList] = useState([]);
  const [completed, setmcompleted] = useState(-1);
  const setCompleted = (id) => {
    setmcompleted(id);
  };
  const addLoader = () => {
    setLoaderList((e) => {
      if (e.length === 0) return [0];
      return [...e, e[e.length - 1] + 1];
    });
  };
  return (
    <div style={{ width: "70vw" }}>
      <button onClick={addLoader}>+Add</button>
      {loaderList.map((e) => {
        return (
          <Loader
            key={e}
            id={e}
            completed={completed}
            setCompleted={setCompleted}
          />
        );
      })}
    </div>
  );
}
