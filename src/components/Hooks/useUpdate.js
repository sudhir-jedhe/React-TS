Forces the component to re-render when called.

Use the useReducer() hook that creates a new object every time it's updated and return its dispatch.
const useUpdate = () => {
  const [, update] = React.useReducer(() => ({}));
  return update;
};

const MyApp = () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp />
);