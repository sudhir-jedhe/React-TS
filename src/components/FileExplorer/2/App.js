import React, { useState } from "react";
import "./style.css";

import { folderData } from "./folder_data/folderData";
import FolderNew from "./components/FolderNew";

import { useFolder } from "./custom_hook/useFolder";

export default function App() {
  const [treeset, setTreeset] = useState(folderData);
  const { addnewItem, updateItem, deleteItem } = useFolder();
  const addItem = (id, name, isfolder) => {
    setTreeset(addnewItem(treeset, id, name, isfolder));
  };

  const rename = (id, name) => {
    setTreeset(updateItem(treeset, id, name));
  };
  const delete_item = (id) => {
    setTreeset(deleteItem(treeset, id));
  };

  return (
    <div>
      {console.log("updatedarry", treeset)}
      <p>Press Enter to submit the input value</p>
      <FolderNew
        treeset={treeset}
        addItem={addItem}
        rename={rename}
        delete_item={delete_item}
      />
    </div>
  );
}
