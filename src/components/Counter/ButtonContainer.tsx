import ButtonComponet from "./ButtonComponent";
export default function ButtonContainer(props) {
  return (
    <div className="buttonContainer">
      <ButtonComponet value={"increment"} action={props.increment} />
      <ButtonComponet value={"decrement"} action={props.decrement} />
      <ButtonComponet value={"reset"} action={props.reset} />
      <ButtonComponet value={"incrementBy"} action={props.incrementBy} />
    </div>
  );
}
