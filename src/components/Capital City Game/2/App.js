import DATA from "./data";
import React, { useState, useEffect } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function App() {
  const [countries, setCountries] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [correctSelection, setCorrectSelection] = useState([]);

  //disappear from list
  const [matched, setMatched] = useState(new Set());

  function handleCountryClick(option) {
    if (selectedOption.length == 2) return;
    const newSelection = [...selectedOption, option];

    if (newSelection.length == 2) {
      const [first, second] = newSelection;

      if (DATA[first] == second || DATA[second] == first) {
        setCorrectSelection(newSelection);

        //disappear from list and reset

        setTimeout(() => {
          setMatched(new Set([...matched, ...newSelection]));
          setSelectedOption([]);
          setCorrectSelection([]);
        }, 1000);
      } else {
        setTimeout(() => {
          setSelectedOption([]);
        }, 1000);
      }
    }
    setSelectedOption(newSelection);
  }

  useEffect(() => {
    setCountries(shuffleArray(Object.entries(DATA).flat()));
  }, []);

  if (matched.size == countries.length) {
    return (
      <div className="container">
        <h1>Many Congratulations!!!!!</h1>
        <p>
          {" "}
          <button> Reset Game</button>
        </p>
      </div>
    );
  }

  return (
    <main>
      <div className="container">
        {countries?.length &&
          countries.map((c, i) => {
            if (matched.has(c)) return null;

            let isSelected = selectedOption.includes(c);
            let isCorrect = isSelected && correctSelection.length == 2;
            let isIncorrect =
              selectedOption.length == 2 && isSelected && isCorrect == false;

            return (
              <button
                key={i}
                className={`country__name 
                  ${isSelected ? "selected__option" : ""}
                   ${isCorrect ? "selected__correct" : ""}
                    ${isIncorrect ? "selected__incorrect" : ""}
                `}
                onClick={() => handleCountryClick(c)}
              >
                {c}
              </button>
            );
          })}
      </div>
    </main>
  );
}
