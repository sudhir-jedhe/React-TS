const style = {
    padding: '10px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
  };
  
  ...
  
  function App() {
    const [count, setCount] = React.useState(0);
  
    const handleClickOutside = () => {
      setCount(0);
    };
  
    const ref = useOutsideClick(handleClickOutside);
  
    const handleClick = () => {
      setCount((state) => state + 1);
    };
  
    const handleHeaderClick = (event) => {
      // do something
  
      event.stopPropagation();
    };
  
    return (
      <div style={style} onClick={handleHeaderClick}>
        <div>Header</div>
        <button ref={ref} type="button" onClick={handleClick}>
          Count: {count}
        </button>
      </div>
    );
  }