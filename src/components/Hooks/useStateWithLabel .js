const useStateWithLabel = (initialValue, label) => {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${label}: ${value}`);
    return [value, setValue];
  };
  
  const Counter = () => {
    const [value, setValue] = useStateWithLabel(0, 'counter');
    return (
      <p>{value}</p>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Counter />
  );
  // Inspecting `Counter` in React developer tools will display:
  //  StateWithLabel: "counter: 0"