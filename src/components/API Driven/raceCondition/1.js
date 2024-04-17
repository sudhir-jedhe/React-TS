import React, {
  useState,
  useRef,
  useEffect,
} from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const App = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        let resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${props.id}`,
          {
            signal: abortController.signal,
          }
        );
        resp = await resp.json();
        setData(resp);
      } catch (error) {
        // abort controller throws error when aborted
        // thus it needs to be handled
      }
    };

    fetchData();

    () => {
      abortController.abort();
    };
  }, [props.id]);

  return <div>{data.title || "Hello World!"}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
