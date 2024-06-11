import React, { useState } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const App = () => {
  // State variables
  const [inputText, setInputText] = useState('');
  const [conversionType, setConversionType] = useState('uppercase');
  const [convertedText, setConvertedText] = useState('');

  // Function to handle text input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to handle conversion type change
  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
  };

  // Function to handle conversion when the button is clicked
  const handleConvert = () => {
    let newText = '';
    switch (conversionType) {
      case 'uppercase':
        newText = inputText.toUpperCase();
        break;
      case 'lowercase':
        newText = inputText.toLowerCase();
        break;
      case 'capitalization':
        newText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        break;
      default:
        newText = inputText;
    }
    setConvertedText(newText);
  };

  return (
    <div>
      <h3>Text Converter</h3>
      {/* Text input */}
      <textarea value={inputText} onChange={handleInputChange} rows={5} cols={50} />
      {/* Select conversion type */}
      <select value={conversionType} onChange={handleConversionTypeChange}>
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
        <option value="capitalization">Capitalization</option>
      </select>
      {/* Convert button */}
      <button onClick={handleConvert}>Convert</button>
      {/* Display converted text */}
      <div>
        <h4>Converted Text:</h4>
        <p>{convertedText}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
