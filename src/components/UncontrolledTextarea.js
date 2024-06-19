const TextArea = ({
    cols = 20,
    rows = 2,
    defaultValue,
    onValueChange,
    ...rest
  }) => {
    return (
      <textarea
        cols={cols}
        rows={rows}
        defaultValue={defaultValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      />
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <TextArea
      placeholder="Insert some text here..."
      onValueChange={val => console.log(val)}
    />
  );
  