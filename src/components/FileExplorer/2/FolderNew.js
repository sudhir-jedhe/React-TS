import React, { useState } from "react";
import "../style.css";

export default function FolderNew({ treeset, addItem, rename, delete_item }) {
  const [expand, setExpand] = useState(false);
  const operationType = React.useRef("new");
  const [minput, setInput] = useState({
    value: "",
    show: false,
    placeholder: "",
  });

  if (treeset.isfolder) {
    return (
      <div style={{ marginLeft: "2rem" }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          📁{treeset.name}
          {minput.show && (
            <input
              placeholder={minput.placeholder}
              onKeyDown={(el) => {
                if (el.keyCode === 13 && el.target.value) {
                  if (operationType.current === "new") {
                    minput.placeholder.toString().includes("folder")
                      ? addItem(treeset.id, minput.value, true)
                      : addItem(treeset.id, minput.value, false);
                  } else if (operationType.current === "update") {
                    rename(treeset.id, minput.value);
                  }
                  setInput({
                    show: false,
                    value: "",
                    placeholder: "",
                  });
                }
              }}
              autoFocus
              value={minput.value}
              onChange={(e) => setInput({ ...minput, value: e.target.value })}
            />
          )}
          <div className="btns">
            <button
              onClick={(el) => {
                el.stopPropagation();
                setInput((e) => {
                  return {
                    ...e,
                    show: true,
                    placeholder: "enter folder name",
                  };
                });
                operationType.current = "new";
              }}
            >
              +Add folder
            </button>
            <button
              onClick={(el) => {
                el.stopPropagation();
                setInput({
                  ...minput,
                  show: true,
                  placeholder: "enter file name",
                });
                operationType.current = "new";
              }}
            >
              +Add file
            </button>
            <button
              onClick={() => {
                setInput({
                  ...minput,
                  show: true,
                  placeholder: "enter new name",
                });
                operationType.current = "update";
              }}
            >
              Rename
            </button>
            <button
              onClick={(el) => {
                el.stopPropagation();
                delete_item(treeset.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        {expand &&
          treeset.children.map((e) => {
            return (
              <FolderNew
                key={e.id}
                treeset={e}
                addItem={addItem}
                rename={rename}
                delete_item={delete_item}
              />
            );
          })}
      </div>
    );
  } else {
    return (
      <div className="file" key={treeset.id}>
        📄{treeset.name}
        <div className="btns">
          {minput.show && (
            <input
              placeholder={minput.placeholder}
              onKeyDown={(el) => {
                if (el.keyCode === 13 && el.target.value) {
                  if (operationType.current === "new") {
                    minput.placeholder.toString().includes("folder")
                      ? addItem(treeset.id, minput.value, true)
                      : addItem(treeset.id, minput.value, false);
                  } else if (operationType.current === "update") {
                    rename(treeset.id, minput.value);
                  }
                  setInput({
                    show: false,
                    value: "",
                    placeholder: "",
                  });
                }
              }}
              autoFocus
              value={minput.value}
              onChange={(e) => setInput({ ...minput, value: e.target.value })}
            />
          )}
          <button
            onClick={() => {
              console.log("clicked");
              setInput({
                ...minput,
                show: true,
                placeholder: "enter new name",
              });
              operationType.current = "update";
            }}
          >
            Rename
          </button>
          <button
            onClick={(el) => {
              el.stopPropagation();
              delete_item(treeset.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
