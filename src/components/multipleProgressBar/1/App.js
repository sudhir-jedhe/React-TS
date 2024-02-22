import Loader from "./Loader";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState([]);
  const [completed, setCompleted] = useState(-1);
  const changeCompletion = (id) => {
    setCompleted(id);
  };
  const addLoader = () => {
    setCount((curr) => {
      if (curr.length === 0) {
        return [0];
      }
      return [...curr, curr[curr.length - 1] + 1];
    });
  };

  return (
    <>
      <button onClick={addLoader}>Add</button>
      {count &&
        count.map((data) => {
          return (
            <Loader
              key={data}
              id={data}
              changeCompletion={changeCompletion}
              completed={completed}
            />
          );
        })}
    </>
  );
}
