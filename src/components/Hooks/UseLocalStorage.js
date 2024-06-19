const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

//    → How to use?

//    → creating localstorage item with isLoggedIn key and setting initial value of false

//    const [loggedIn, setLoggedIn] = useLocalStorage('isLoggedIn', false);

//    → Now, loggedIn variable will contain the updated value of localstorage isLoggedIn item

//    → To update the localstorage value, you can just call setLoggedIn(true) or setLoggedIn(false).

//    In this case, we're just storing the logged-in status with boolean value but you can store any information in the localstorage using this useLocalStorage hook.



import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;


import useLocalStorage from "./useLocalStorage";

const [theme, setTheme] = useLocalStorage("theme", "dark");
<button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>Toggle theme</button>
const Wrapper = styled.div`
font-family: "Roboto";
padding: 40px;
background: ${(props) => (props.theme === "light" ? "white" : "#1a1433")};
height: 100vh;
`;


const App = () => {
    const [isOpen, setOpen] = useLocalStorage('is-open', false);
  
    const handleToggle = () => {
      setOpen(!isOpen);
    };
  
    return (
      <div>
        <button onClick={handleToggle}>Toggle</button>
        {isOpen && <div>Content</div>}
      </div>
    );
  };
  
  export default App;