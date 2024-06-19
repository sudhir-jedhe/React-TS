const usePortal = el => {
    const [portal, setPortal] = React.useState({
      render: () => null,
      remove: () => null,
    });
  
    const createPortal = React.useCallback(el => {
      const Portal = ({ children }) => ReactDOM.createPortal(children, el);
      const remove = () => ReactDOM.unmountComponentAtNode(el);
      return { render: Portal, remove };
    }, []);
  
    React.useEffect(() => {
      if (el) portal.remove();
      const newPortal = createPortal(el);
      setPortal(newPortal);
      return () => newPortal.remove(el);
    }, [el]);
  
    return portal.render;
  };
  
  const App = () => {
    const Portal = usePortal(document.querySelector('title'));
  
    return (
      <p>
        Hello world!
        <Portal>Portalized Title</Portal>
      </p>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  );