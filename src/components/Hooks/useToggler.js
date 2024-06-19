const useToggler = initialState => {
    const [value, setValue] = React.useState(initialState);
  
    const toggleValue = React.useCallback(() => setValue(prev => !prev), []);
  
    return [value, toggleValue];
  };
  
  const Switch = () => {
    const [val, toggleVal] = useToggler(false);
    return <button onClick={toggleVal}>{val ? 'ON' : 'OFF'}</button>;
  };
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Switch />
  );