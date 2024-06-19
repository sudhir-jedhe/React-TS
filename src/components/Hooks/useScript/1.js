const useScript = src => {
    const [status, setStatus] = React.useState(src ? 'loading' : 'idle');
  
    React.useEffect(() => {
      if (!src) {
        setStatus('idle');
        return;
      }
  
      let script = document.querySelector(`script[src="${src}"]`);
  
      if (!script) {
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.setAttribute('data-status', 'loading');
        document.body.appendChild(script);
  
        const setDataStatus = event => {
          script.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          );
        };
        script.addEventListener('load', setDataStatus);
        script.addEventListener('error', setDataStatus);
      } else {
        setStatus(script.getAttribute('data-status'));
      }
  
      const setStateStatus = event => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };
  
      script.addEventListener('load', setStateStatus);
      script.addEventListener('error', setStateStatus);
  
      return () => {
        if (script) {
          script.removeEventListener('load', setStateStatus);
          script.removeEventListener('error', setStateStatus);
        }
      };
    }, [src]);
  
    return status;
  };
  
  const script =
    'data:text/plain;charset=utf-8;base64,KGZ1bmN0aW9uKCl7IGNvbnNvbGUubG9nKCdIZWxsbycpIH0pKCk7';
  
  const Child = () => {
    const status = useScript(script);
    return <p>Child status: {status}</p>;
  };
  
  const MyApp = () => {
    const status = useScript(script);
    return (
      <>
        <p>Parent status: {status}</p>
        <Child />
      </>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
  );