import React from "react";
import {
  toLowerCase,
  toUpperCase,
  encodeBase64,
  decodeBase64,
} from "./utils/helper.js";

export function TextConverter() {
  const [userSelect, setUserSelect] = React.useState("");
  const [text, setText] = React.useState("");
  const inputHandler = (e) => {
    setUserSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userSelect);
    let finalValue;
    if (userSelect === "toLowerCase") {
      finalValue = toLowerCase(text);
    } else if (userSelect === "toUpperCase") {
      finalValue = toUpperCase(text);
    } else if (userSelect === "encodeBase64") {
      finalValue = encodeBase64(text);
    } else if (userSelect === "decodeBase64") {
      finalValue = decodeBase64(text);
    }
    console.log(finalValue);
    setText(finalValue);
    return finalValue;
  };

  return (
    <div className="text-container">
      <h1>Text Convertor</h1>
      <h3>Text to be converted:</h3>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="what need to be converted"
      ></textarea>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="toLowerCase"
            checked={userSelect === "toLowerCase"}
            onChange={inputHandler}
          />
          Convert text to lower Case
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="toUpperCase"
            checked={userSelect === "toUpperCase"}
            onChange={inputHandler}
          />
          Convert text to Upper Case
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="encodeBase64"
            checked={userSelect === "encodeBase64"}
            onChange={inputHandler}
          />
          encode Base64
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="decodeBase64"
            checked={userSelect === "decodeBase64"}
            onChange={inputHandler}
          />
          decode Base64
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
