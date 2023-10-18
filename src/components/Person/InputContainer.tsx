import InputComponent from "./InputComponent";
export default function InputContainer(props) {
  return (
    <div className="personInputContainer">
      <InputComponent
        name={"First Name"}
        onChangeHandler={props.onChangeFName}
      />
      <InputComponent
        name={"Last Name"}
        onChangeHandler={props.onChangeLName}
      />
    </div>
  );
}
