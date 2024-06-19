const useDefault = (defaultState, initialState) => {
    const [value, setValue] = React.useState(initialState);
    const isValueEmpty = value === undefined || value === null;
    return [isValueEmpty ? defaultState : value, setValue];
  };
  
  const UserCard = () => {
    const [user, setUser] = useDefault({ name: 'Adam' }, { name: 'John' });
  
    return (
      <>
        <div>User: {user.name}</div>
        <input onChange={e => setUser({ name: e.target.value })} />
        <button onClick={() => setUser(null)}>Clear</button>
      </>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <UserCard />
  );