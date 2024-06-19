const Select = ({ values, onValueChange, selectedValue, ...rest }) => {
    return (
      <select
        defaultValue={selectedValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      >
        {values.map(([value, text]) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    );
  };
  
  const choices = [
    ['grapefruit', 'Grapefruit'],
    ['lime', 'Lime'],
    ['coconut', 'Coconut'],
    ['mango', 'Mango'],
  ];
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Select
      values={choices}
      selectedValue="lime"
      onValueChange={val => console.log(val)}
    />
  );