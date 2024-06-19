const UncontrolledInput = ({ defaultValue, onValueChange, ...rest }) => {
    return (
      <input
        defaultValue={defaultValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      />
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <UncontrolledInput
      type="text"
      placeholder="Insert some text here..."
      onValueChange={console.log}
    />
  );