import { useState, useEffect } from "react";
export default function Loader(props) {
  const [width, setWidth] = useState(0);
  const { completed, changeCompletion, id } = props;
  useEffect(() => {
    let timer;
    console.log(completed, id, "check,........");
    if (completed === id - 1 && width !== 100) {
      timer = setTimeout(function () {
        setWidth((curr) => curr + 25);
      }, 1000);
    }
    if (width === 100) {
      console.log(id);
      changeCompletion(id);
    }
    return () => clearTimeout(timer);
  }, [width, completed]);
  return (
    <div className="loader-container">
      <div className="loader-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
}
