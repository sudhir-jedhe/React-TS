import * as React from 'react';

const useEffectOnlyOnUpdate = (callback, dependencies) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      callback(dependencies);
    } else {
      didMount.current = true;
    }
  }, [callback, dependencies]);
};

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffectOnlyOnUpdate((dependencies) => {
    console.log('I run only if toggle changes.');
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default App;