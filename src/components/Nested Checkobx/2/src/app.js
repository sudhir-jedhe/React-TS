import React, { useEffect } from "react";
import { fetchData } from "./utils/api";
import { useStore } from "./store";
import CheckboxTree from "./components/CheckboxTree";

const App = () => {
  const { setData } = useStore();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();
  }, [setData]);

  return (
    <div className="App">
      <h1>Checkbox Tree App</h1>
      <CheckboxTree />
    </div>
  );
};

export default App;
