import React from "react";

function ButtonContainer(props) {
  const {
    removeFirstElement,
    removeLastElement,
    removeSpecificLetter,
    updateSpecificCharacter,
    addToStart,
    addToEnd,
    addLetterAtIndex,
    resetArr,
    emptyArr,
  } = props;
  return (
    <div className="arrayButtonContainer">
      <button onClick={removeFirstElement}>Remove First</button>
      <button onClick={removeLastElement}>Remove Last</button>
      <button onClick={() => removeSpecificLetter("C")}>
        Remove Specific Letter
      </button>
      <button onClick={() => updateSpecificCharacter("A", "H")}>
        Update Character from A to H{" "}
      </button>
      <button onClick={() => addToStart("A")}>Add to Start</button>
      <button onClick={() => addToEnd("Z")}>Add to End</button>
      <button onClick={() => addLetterAtIndex("Z", 5)}>
        Add Letter At Index
      </button>
      <button onClick={resetArr}>Reset Arr</button>
      <button onClick={emptyArr}>Empty</button>
    </div>
  );
}

export default ButtonContainer;
