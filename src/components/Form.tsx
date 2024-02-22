import React, { useEffect, useState } from "react";

function useLocalStorage(
  key: string,
  defaultVal: string = ""
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(() => {
    const valInLocalStorage = window.localStorage.getItem(key);
    if (valInLocalStorage) {
      return JSON.parse(valInLocalStorage);
    }
    return typeof defaultVal === "function" ?  defaultVal() : defaultVal;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const prevKeyRef = React.useRef(key);

  useEffect(() => {
    // If the key changes we need to update our local storage with a new key and reset it
    // BLACKBOX Autocomplete
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
}

export default function Form(initialValue: string) {
  const [val, setVal] = useLocalStorage("ajay", initialValue);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };
  return (
    <div>
      <label htmlFor="input"></label>
      <input id="input" value={val} onChange={changeHandler} type="text" />
      <p>{`Input: ${val}`}</p>
    </div>
  );
}
