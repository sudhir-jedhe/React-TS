const useTitle = title => {
    const documentDefined = typeof document !== 'undefined';
    const originalTitle = React.useRef(documentDefined ? document.title : null);
  
    React.useEffect(() => {
      if (!documentDefined) return;
  
      if (document.title !== title) document.title = title;
  
      return () => {
        document.title = originalTitle.current;
      };
    }, []);
  };
  
  const Alert = () => {
    useTitle('Alert');
    return <p>Alert! Title has changed</p>;
  };
  
  const MyApp = () => {
    const [alertOpen, setAlertOpen] = React.useState(false);
  
    return (
      <>
        <button onClick={() => setAlertOpen(!alertOpen)}>Toggle alert</button>
        {alertOpen && <Alert />}
      </>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
  );
  