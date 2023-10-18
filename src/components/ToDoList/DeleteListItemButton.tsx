import React from "react";

function DeleteListItemButton(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.deleteToDoItem(props.id)}>
        Delete Item
      </button>
    </React.Fragment>
  );
}

export default DeleteListItemButton;
