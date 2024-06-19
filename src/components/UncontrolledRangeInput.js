const Slider = ({
    min = 0,
    max = 100,
    defaultValue,
    onValueChange,
    ...rest
  }) => {
    return (
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      />
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Slider onValueChange={val => console.log(val)} />
  );