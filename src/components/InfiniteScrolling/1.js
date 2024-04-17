import React, {
  useState,
  useRef,
  useEffect,
  Children,
} from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const App = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      // if scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        // update the state
        setCount(count + 50);
      }
    };

    // scroll event
    window.addEventListener("scroll", onScroll);

    // memory cleanup, remove listener
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  // generate items
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }

  return <div>{elements}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
