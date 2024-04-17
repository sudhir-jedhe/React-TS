import React, { useState, useEffect } from "react";
import Child from "./Child";

function Parent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [show, setShow] = useState(true);
  useEffect(() => {
    console.log("Re Render  Parent effect");
  });

  useEffect(() => {
    console.log("Component Mount  Parent effect");
    return () => {
      console.log("Componet Unmount");
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log(`My Name is ${name}`);
    }, 2000);
    return () => {
      clearInterval(timeOut);
    };
  });

  useEffect(() => {
    console.log("render when name or age changes  Parent effect", name, age);
  }, [age, name]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  const toggleShow = () => {
    setShow((current) => !current);
  };
  return (
    <div className="parent">
      <div className="parentInputContainer">
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <input type="number" onChange={(e) => setAge(e.target.value)}></input>
      </div>
      <button onClick={toggleShow}>ShowHide</button>
      {show ? <Child /> : null}
    </div>
  );
}

export default Parent;
