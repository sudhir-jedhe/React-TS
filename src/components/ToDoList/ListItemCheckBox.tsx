import React from "react";

function ListItemCheckBox(props) {
  return (
    <React.Fragment>
      <input type="checkbox" onChange={() => props.onChange()}></input>
    </React.Fragment>
  );
}

export default ListItemCheckBox;
