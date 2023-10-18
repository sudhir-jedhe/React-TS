export default function InputComponent() {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return <input type="text" onChange={(e) => onChangeHandler(e)} />;
}
