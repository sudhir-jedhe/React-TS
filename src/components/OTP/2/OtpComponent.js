import React from "react";

const OtpComponent = ({ size = 6 }) => {
  const [values, setValues] = React.useState(new Array(size).fill(""));
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef();

  React.useEffect(() => {
    // inputRef.current?.focus();
  }, [activeIndex]);

  // const handleInputChange = (e) => {
  //   console.log("inputchange")
  //   const currentTarget = e.currentTarget;
  //   const current = Number(currentTarget.getAttribute('data-id'));
  //   let prevValues = values;
  //   prevValues[current] = currentTarget.value;
  //   setValues(prevValues);
  //   setActiveIndex((prev) => prev + 1);
  // };

  const handleKeyDown = (e) => {
    console.log("key down");
    const keyCode = e.keyCode;
    const currentTarget = e.currentTarget;
    const current = currentTarget.getAttribute("data-id");
    if (keyCode === 8) {
      let prevValues = values;
      prevValues[current] = null;
      setValues(prevValues);
      setActiveIndex((prev) => prev - 1);
    } else if (keyCode === 39) {
      setActiveIndex((prev) => prev + 1);
    } else if (keyCode === 37) {
      setActiveIndex((prev) => prev - 1);
    } else {
      console.log("i am here");
      let prevValues = values;
      prevValues[current] = currentTarget.value;
      setValues(prevValues);
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="input-group">
      {values.map((value, index) => (
        <input
          className={`input ${activeIndex === index ? "active" : ""}`}
          ref={index === activeIndex ? inputRef : null}
          type="number"
          key={index}
          value={value}
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          data-id={index}
          // onChange={handleKeyDown}
          onKeyDown={handleKeyDown}
        />
      ))}
    </div>
  );
};

export default OtpComponent;
