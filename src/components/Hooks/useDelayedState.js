const useDelayedState = (initialState, condition) => {
    const [{ state, loaded }, setState] = React.useState({
      state: null,
      loaded: false,
    });
  
    React.useEffect(() => {
      if (!loaded && condition) setState({ state: initialState, loaded: true });
    }, [condition, loaded]);
  
    const updateState = newState => {
      if (!loaded) return;
      setState({ state: newState, loaded });
    };
  
    return [state, updateState];
  };
  
  const App = () => {
    const [branches, setBranches] = React.useState([]);
    const [selectedBranch, setSelectedBranch] = useDelayedState(
      branches[0],
      branches.length
    );
  
    React.useEffect(() => {
      const handle = setTimeout(() => {
        setBranches(['master', 'staging', 'test', 'dev']);
      }, 2000);
      return () => {
        handle && clearTimeout(handle);
      };
    }, []);
  
    return (
      <div>
        <p>Selected branch: {selectedBranch}</p>
        <select onChange={e => setSelectedBranch(e.target.value)}>
          {branches.map(branch => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  );