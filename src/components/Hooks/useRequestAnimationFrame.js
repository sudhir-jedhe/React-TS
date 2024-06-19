const useRequestAnimationFrame = callback => {
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();
  
    const animate = time => {
      if (previousTimeRef.current) callback(time - previousTimeRef.current);
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
  
    React.useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []);
  };
  
  const Counter = () => {
    const [count, setCount] = React.useState(0);
  
    useRequestAnimationFrame(deltaTime => {
      setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
    });
  
    return <p>{Math.round(count)}</p>;
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Counter />
  );