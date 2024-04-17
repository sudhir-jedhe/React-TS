import React, { useState } from "react";

function UseState() {
  const initialCount = 0;
  const [name, setFname] = useState({ fname: "Kiara", lName: "Jedhe" });
  const [count, setCount] = useState(initialCount);
  const [items, setItems] = useState([]);

  const changeName = () => {
    setFname({ ...name, fname: "Pari", lName: "Gole" });
  };
  const changeFname = (e) => {
    setFname({ ...name, fname: e.target.value });
  };

  const changeLname = (e) => {
    setFname({ ...name, lName: e.target.value });
  };

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: `item ${items.length}`,
      },
    ]);
  };

  const list = items.map((item) => {
    console.log(items);
    return <li key={item.id}>{item.value}</li>;
  });
  return (
    <>
      <div>Count is {count}</div>
      <div>
        My child name is {name.fname} {name.lName}
      </div>
      <div>
        <label htmlFor="fName">First Name</label>
        <input
          id="fName"
          value={name.fname}
          onChange={(e) => changeFname(e)}
        ></input>
        <label htmlFor="fName">lAST Name</label>
        <input
          id="fName"
          value={name.lName}
          onChange={(e) => changeLname(e)}
        ></input>
      </div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 5)}>
        IncrementBy5
      </button>
      <button onClick={changeName}>Change Name</button>

      <button onClick={addItems}>Add Item to List</button>
      <ul>{list}</ul>
    </>
  );
}

export default UseState;
