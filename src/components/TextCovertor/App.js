import React, { useState } from "react";
import "./style.css";

const TextConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [conversionType, setConversionType] = useState("uppercase");

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let convertedText;
    switch (conversionType) {
      case "uppercase":
        convertedText = inputText.toUpperCase();
        break;
      case "lowercase":
        convertedText = inputText.toLowerCase();
        break;
      case "encodeBase64":
        convertedText = btoa(inputText);
        break;
      case "decodeBase64":
        convertedText = atob(inputText);
        break;
      default:
        convertedText = inputText;
    }
    setOutputText(convertedText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="input-text">Input text:</label>
        <textarea
          id="input-text"
          value={inputText}
          onChange={handleInputTextChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="conversion-type">Conversion type:</label>
        <select
          id="conversion-type"
          value={conversionType}
          onChange={handleConversionTypeChange}
          className="form-control"
        >
          <option value="uppercase">Convert text to uppercase</option>
          <option value="lowercase">Convert text to lowercase</option>
          <option value="encodeBase64">Encode Base64</option>
          <option value="decodeBase64">Decode Base64</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <div className="form-group">
        <label htmlFor="output-text">Output text:</label>
        <textarea
          id="output-text"
          value={outputText}
          readOnly
          className="form-control"
        />
      </div>
    </form>
  );
};

export default TextConverter;
