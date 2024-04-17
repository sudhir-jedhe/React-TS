import { useState, useEffect } from "react";

const Game = (props) => {
  const [buttons, setButtons] = useState([]);
  const [selection, setSelection] = useState([]);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    shuffleData(props.data);
  }, []);

  useEffect(() => {
    checkSelection();
  }, [selection]);

  const shuffleData = (data) => {
    setButtons(
      [...Object.keys(data), ...Object.values(data)].sort(
        (a, b) => 0.5 - Math.random()
      )
    );
  };

  const handleSelection = (event) => {
    if (selection.length < 2 && !selection.includes(event.target.innerText)) {
      setSelection([...selection, event.target.innerText]);
    }
  };

  const checkSelection = () => {
    if (selection.length === 2) {
      if (
        props.data.hasOwnProperty(selection[0]) &&
        props.data[selection[0]] === selection[1]
      ) {
        setMatch(true);
        setTimeout(() => {
          setMatch(null);
          setButtons(() => buttons.filter((i) => !selection.includes(i)));
          setSelection([]);
        }, 1000);
      } else if (
        props.data.hasOwnProperty(selection[1]) &&
        props.data[selection[1]] === selection[0]
      ) {
        setMatch(true);
        setTimeout(() => {
          setMatch(null);
          setButtons(() => buttons.filter((i) => !selection.includes(i)));
          setSelection([]);
        }, 1000);
      } else {
        setMatch(false);
        setTimeout(() => {
          setMatch(null);
          setSelection([]);
        }, 1000);
      }
    }
  };

  const borderColorChecker = (el) => {
    if (selection.length > 0) {
      if (selection.includes(el)) {
        if (match !== null) {
          return match === true ? "#66cc99" : "red";
        } else {
          return "blue";
        }
      } else {
        return "#414141";
      }
    } else {
      return "#414141";
    }
  };

  return (
    <>
      <div style={{ padding: "40px 0" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {buttons.length > 0 ? (
            buttons.map((i) => (
              <button
                style={{
                  border: `${borderColorChecker(i)} 1px solid`,
                  margin: "2px",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={(e) => handleSelection(e)}
                key={i}
              >
                {i}
              </button>
            ))
          ) : (
            <h2>Congratulations!</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Game;
