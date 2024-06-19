const useError = err => {
    const [error, setError] = React.useState(err);
  
    React.useEffect(() => {
      if (error) throw error;
    }, [error]);
  
    const dispatchError = React.useCallback(err => {
      setError(err);
    }, []);
  
    return dispatchError;
  };
  
  const ErrorButton = () => {
    const dispatchError = useError();
  
    const clickHandler = () => {
      dispatchError(new Error('Error!'));
    };
  
    return <button onClick={clickHandler}>Throw error</button>;
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ErrorButton />
  );