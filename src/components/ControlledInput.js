const ControlledInput = ({ value, onValueChange, ...rest }) => {
    return (
      <input
        value={value}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      />
    );
  };
  
  const Form = () => {
    const [value, setValue] = React.useState('');
  
    return (
      <ControlledInput
        type="text"
        placeholder="Insert some text here..."
        value={value}
        onValueChange={setValue}
      />
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Form />
  );