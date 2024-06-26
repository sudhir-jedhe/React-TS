const useGetSet = initialState => {
    const state = React.useRef(initialState);
    const [, update] = React.useReducer(() => ({}));
  
    return React.useMemo(
      () => [
        () => state.current,
        newState => {
          state.current = newState;
          update();
        },
      ],
      []
    );
  };
  
  const Counter = () => {
    const [getCount, setCount] = useGetSet(0);
    const onClick = () => {
      setTimeout(() => {
        setCount(getCount() + 1);
      }, 1_000);
    };
  
    return <button onClick={onClick}>Count: {getCount()}</button>;
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Counter />
  );