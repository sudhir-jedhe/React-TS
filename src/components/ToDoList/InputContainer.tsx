import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponet";
export default function InputContainer(props) {
  return (
    <div className="inputContainer">
      <InputComponent {...props}></InputComponent>
      <ButtonComponent {...props}></ButtonComponent>
    </div>
  );
}
