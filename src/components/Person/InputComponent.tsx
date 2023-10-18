export default function InputComponent({ name, onChangeHandler }) {
  return (
    <>
      <label htmlFor="name">{name}:</label>
      <input id={name} type="text" onChange={(e) => onChangeHandler(e)} />
    </>
  );
}
