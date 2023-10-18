import React from "react";
import ListItemCheckBox from "./ListItemCheckBox";
import ListItemData from "./ListItemData";
import DeleteListItemButton from "./DeleteListItemButton";

export default function ListItem(props) {
  return (
    <div>
      <ul className="list">
        <li className="list-item">
          <React.Fragment>
            <ListItemCheckBox {...props} />
            <ListItemData {...props} />
            <DeleteListItemButton {...props} />
          </React.Fragment>
        </li>
      </ul>
    </div>
  );
}
