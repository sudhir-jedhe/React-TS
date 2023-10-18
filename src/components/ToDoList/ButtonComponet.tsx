export default function ButtonComponent(props) {
  return (
    <button className="addItem" onClick={() => props.addItem()}>
      Add
    </button>
  );
}
