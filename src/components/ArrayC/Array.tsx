import React, { useState } from "react";
import "./style.css";
import InputContainer from "./InputContainer";
import ButtonContainer from "./ButtonContainer";
import UpdateArray from "./UpdateArray";
const INITAIl_ARRAY = ["A", "B", "C", "D", "E", "F", "G", "H"];
function Array() {
  const [arr, setArr] = useState(INITAIl_ARRAY);
  const [value, setvalue] = useState("");

  const removeFirstElement = () => {
    // setArr([...arr, arr.slice(1)]);
    setArr((curretArr) => {
      return curretArr.slice(1);
    });
  };

  const removeLastElement = () => {
    setArr((currentArr) => {
      return currentArr.slice(0, -1);
    });
  };

  const removeSpecificLetter = (letter) => {
    setArr((currentArr) => {
      return currentArr.filter((element) => element != letter);
    });
  };

  const addToStart = (letter) => {
    setArr((currentArray) => {
      return [letter, ...currentArray];
    });
  };

  const addToEnd = (letter: string) => {
    setArr((currentArray) => {
      return [...currentArray, letter];
    });
  };

  const emptyArr = () => {
    setArr([]);
  };

  const addLetterAtIndex = (letter: string, index: number | undefined) => {
    // [before. letter, after]
    setArr((currentArr) => {
      return [
        ...currentArr.slice(0, index),
        letter,
        ...currentArr.slice(index),
      ];
    });
  };

  const updateSpecificCharacter = (original, target) => {
    setArr((curretArr) => {
      return curretArr.map((current) => {
        if (current === original) {
          return target;
        }
        return current;
      });
    });
  };

  const resetArr = () => {
    setArr(INITAIl_ARRAY);
  };

  const changeHandler = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div className="actionContainer">
      <div className="arrayAction">
        <InputContainer
          value={value}
          changeHandler={changeHandler}
          addToStart={addToStart}
        />
        <ButtonContainer
          addLetterAtIndex={addLetterAtIndex}
          addToEnd={addToEnd}
          addToStart={addToStart}
          removeFirstElement={removeFirstElement}
          removeLastElement={removeLastElement}
          removeSpecificLetter={removeSpecificLetter}
          resetArr={resetArr}
          emptyArr={emptyArr}
          updateSpecificCharacter={updateSpecificCharacter}
        />
      </div>
      <div className="updateArray">
        <UpdateArray arr={arr} />
      </div>
    </div>
  );
}

export default Array;
