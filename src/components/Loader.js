import { useState } from "react";

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

const FAILURE_COUNT = 10;
const LATENCY = 1000;

function mockServer() {
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve();
      }
    }, randomTimeout);
  });
}

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");

  const handleClick = async () => {
    try {
      setLoading(true);
      let resp = await mockServer();
      setApiData("Hello World");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Make api call</button>

      {isLoading ? <Loader /> : <p>{apiData ? "Api call complete" : ""}</p>}
    </div>
  );
}

const Loader = () => {
  return <p>Loading</p>;
};
