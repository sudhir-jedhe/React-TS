export default function ButtonComponet({ value, action }) {
  return <button onClick={action}>{value}</button>;
}
