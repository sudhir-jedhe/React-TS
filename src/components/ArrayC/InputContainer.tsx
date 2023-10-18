import React from "react";

function InputContainer(props) {
  const { value, changeHandler, addToStart } = props;
  return (
    <div className="arrayInputContainer">
      <input type="text" value={value} onChange={(e) => changeHandler(e)} />
      <button onClick={() => addToStart(value)}>Add to Array</button>
    </div>
  );
}

export default InputContainer;
