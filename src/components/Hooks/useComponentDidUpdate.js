const useComponentDidUpdate = (callback, condition) => {
    const mounted = React.useRef(false);
    React.useEffect(() => {
      if (mounted.current) callback();
      else mounted.current = true;
    }, condition);
  };
  
  const App = () => {
    const [value, setValue] = React.useState(0);
    const [otherValue, setOtherValue] = React.useState(1);
  
    useComponentDidUpdate(() => {
      console.log(`Current value is ${value}.`);
    }, [value]);
  
    return (
      <>
        <p>
          Value: {value}, other value: {otherValue}
        </p>
        <button onClick={() => setValue(value + 1)}>Increment value</button>
        <button onClick={() => setOtherValue(otherValue + 1)}>
          Increment other value
        </button>
      </>
    );
  };