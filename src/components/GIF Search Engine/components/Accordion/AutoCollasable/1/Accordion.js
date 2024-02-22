import React from "react";

const Accordion = (props) => {
  return <div>{props.children}</div>;
};

const ProgressBar = (props) => (
  <div className="progress-bar-wrapper">
    <div
      className="progress-bar-body-in-progress"
      style={{ width: `${(props.timeElapsed / props.timeLimit) * 100}%` }}
    />
  </div>
);

Accordion.ProgressBar = ProgressBar;

const Item = (props) => <div>{props.children}</div>;

Accordion.Item = Item;

const Toggle = (props) => (
  <button
    className={
      props.open
        ? "accordion-element-title-open"
        : "accordion-element-title-closed"
    }
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Accordion.Toggle = Toggle;

const Panel = (props) => (
  <div
    className={
      props.open
        ? "accordion-element-body-open"
        : "accordion-element-body-closed"
    }
  >
    {props.children}
  </div>
);

Accordion.Panel = Panel;

export default Accordion;
