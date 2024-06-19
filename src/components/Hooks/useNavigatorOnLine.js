const getOnLineStatus = () =>
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine
      : true;
  
  const useNavigatorOnLine = () => {
    const [status, setStatus] = React.useState(getOnLineStatus());
  
    const setOnline = () => setStatus(true);
    const setOffline = () => setStatus(false);
  
    React.useEffect(() => {
      window.addEventListener('online', setOnline);
      window.addEventListener('offline', setOffline);
  
      return () => {
        window.removeEventListener('online', setOnline);
        window.removeEventListener('offline', setOffline);
      };
    }, []);
  
    return status;
  };
  
  const StatusIndicator = () => {
    const isOnline = useNavigatorOnLine();
  
    return <span>You are {isOnline ? 'online' : 'offline'}.</span>;
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <StatusIndicator />
  );