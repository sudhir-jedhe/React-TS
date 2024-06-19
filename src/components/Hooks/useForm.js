const useForm = initialValues => {
    const [values, setValues] = React.useState(initialValues);
  
    return [
      values,
      e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      }
    ];
  };
  
  const Form = () => {
    const initialState = { email: '', password: '' };
    const [values, setValues] = useForm(initialState);
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(values);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={setValues} />
        <input type="password" name="password" onChange={setValues} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Form />
  );
  