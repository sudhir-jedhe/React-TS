import React, { useState, useEffect } from "react";
import _ from "lodash";
import classnames from "classnames";

const Game = ({ data }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctSelection, setCorrectSelections] = useState([]);
  //india => Delhi
  //Russia => Moscow
  // Set will become = India,Delhi Russia,Moscow
  const [matched, setMatched] = useState(new Set());
  console.log(matched, "mat");

  const clickHandler = (e) => {
    const value = e.target.getAttribute("data-value");
    selectedOptions.concat(value);
    console.log({ value });
    //two turns
    // first turn => capital/country
    // border-color to  blue
    //check answer => right/wrong
    // border-color => red/green
    // reset

    // [India]
    // [India, Delhi]
    const newSelection = selectedOptions.concat(value);

    if (newSelection.length === 2) {
      const [first, second] = newSelection;
      //first => india ,second:Delhi
      //

      if (data[first] === value || data[second] === value) {
        //correct matching case
        setCorrectSelections(newSelection);
        setMatched(new Set([...matched, ...newSelection]));
        setTimeout(function reset() {
          setCorrectSelections([]);
          setSelectedOptions([]);
        });
      } else {
        setSelectedOptions(newSelection);
        setTimeout(function reset() {
          setSelectedOptions([]);
        }, 1000);
      }
      //
    } else {
      setSelectedOptions(newSelection);
    }
  };

  useEffect(function onMount() {
    const allOptions = Object.entries(data).flat();
    setOptions(_.shuffle(allOptions));
  }, []);

  return (
    <div className="game-board">
      {options.map((option) => {
        if (matched.has(option)) {
          return null;
        }
        //[india]
        //option => india
        //isSelected => true

        const isSelected =
          selectedOptions.includes(option) || correctSelection.includes(option);
        const isCorrect = correctSelection.includes(option);
        const isIncorrect =
          selectedOptions.length === 2 && isSelected && !isCorrect;
        return (
          <button
            className={classnames(
              "options",
              isSelected && "selected",
              isIncorrect && "incorrect",
              isCorrect && "correct"
            )}
            key={option}
            data-value={option}
            onClick={clickHandler}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Game;
