const useComponentWillUnmount = onUnmountHandler => {
    React.useEffect(
      () => () => {
        onUnmountHandler();
      },
      []
    );
  };
  
  const Unmounter = () => {
    useComponentWillUnmount(() => console.log('Component will unmount'));
  
    return <div>Check the console!</div>;
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Unmounter />
  );