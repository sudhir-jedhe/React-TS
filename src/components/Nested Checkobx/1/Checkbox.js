import React, { useEffect, useRef, useState } from "react";

export default function Checkbox(props) {
  const [checked, setChecked] = useState(false);
  const [childrenChecked, setChildrenChecked] = useState(
    () => props.children?.map(() => false) || []
  );
  const inputRef = useRef();

  const handleClick = (e) => {
    setChecked((s) => !s);
    setChildrenChecked(props.children?.map(() => !checked));
  };

  const onChildStateChange = (i, state) => {
    setChildrenChecked((s) => {
      const newState = [...s];
      newState[i] = state;
      return newState;
    });
  };

  const setIndeterminate = (indeterminate) => {
    inputRef.current.indeterminate = indeterminate;
  };

  useEffect(() => {
    if (childrenChecked?.every((el) => el === false)) {
      setChecked(false);
      setIndeterminate(false);
    } else if (childrenChecked?.every((el) => el === true)) {
      setChecked(true);
      setIndeterminate(false);
    } else if (childrenChecked?.length > 1) {
      setIndeterminate(true);
    }
  }, [childrenChecked]);

  useEffect(() => {
    props.onStateChange?.(checked);
    setIndeterminate(false);
  }, [checked]);

  useEffect(() => {
    setChecked(props.checked || false);
    setChildrenChecked(props.children?.map(() => props.checked || false));
  }, [props.checked]);

  return (
    <div style={{ textAlign: "left" }}>
      <input
        type="checkbox"
        checked={checked}
        onClick={handleClick}
        name={props.label}
        ref={inputRef}
      />
      <label for={props.label} onClick={handleClick}>
        {props.label}
      </label>
      {props.children && (
        <div style={{ marginLeft: "10px" }}>
          {props.children.map((child, i) =>
            React.cloneElement(child, {
              checked: childrenChecked[i],
              onStateChange: (state) => onChildStateChange(i, state),
            })
          )}
        </div>
      )}
    </div>
  );
}
