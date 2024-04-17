import { useState, useEffect } from "react";
import "./Game.css";
import { shuffle } from "./utils";

const Game = ({ data }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [userSelectedCapital, setUserSelectedCapital] = useState("");
  const [borderClass, setBorderClass] = useState("selectedOption");

  const capitalsData = Object.entries(data).reduce((prev, next) => {
    const [key, value] = next;
    prev[key] = value;
    prev[value] = key;
    return prev;
  }, {});

  useEffect(() => {
    const allOptions = Object.entries(data).flat();
    const shuffledOption = shuffle(allOptions);
    setSelectedOption(shuffledOption[0]);
    setOptions(shuffledOption);
  }, []);

  const onButtonClick = (option) => {
    setUserSelectedCapital(option);
    const capitalSelected = capitalsData[option];
    if (capitalSelected === selectedOption) {
      // set them with green color
      setBorderClass("correctSelectedOption");
      // update options
      const newOptions = [...options];
      const keyIndex = newOptions.indexOf(capitalSelected);
      newOptions.splice(keyIndex, 1);
      const valueIndex = newOptions.indexOf(option);
      newOptions.splice(valueIndex, 1);

      setTimeout(() => {
        setBorderClass("selectedOption");
        setOptions(newOptions);
        setSelectedOption(newOptions[0]);
        setUserSelectedCapital("");
      }, 1000);
    } else {
      setBorderClass("errorSelectedOption");
      setTimeout(() => {
        setBorderClass("selectedOption");
        setUserSelectedCapital("");
      }, 1000);
    }
    console.log({ options, capitalSelected, capitalsData, selectedOption });
  };

  return (
    <div className="board">
      {options.length < 1 ? <h1>Congratulations!</h1> : null}
      {options.map((option) => (
        <button
          onClick={() => onButtonClick(option)}
          className={`button ${
            selectedOption === option || userSelectedCapital === option
              ? borderClass
              : ""
          }`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Game;
