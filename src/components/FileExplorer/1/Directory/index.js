import { useReducer } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import Controls from "./Controls";
import Nodes from "./Nodes";

import { DirectoryContext } from "./context/DirectoryContext";

import reducer from "./state/reducer";
import { initialState } from "./state";
import { createNode, toggleContentVisibility } from "./state/actions";
import { NODE_TYPES } from "../constants";

const Directory = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleControlItemClick = (action) => {
    let type = NODE_TYPES.FILE;

    if (action === "createFolder") {
      type = NODE_TYPES.FOLDER;
    }

    dispatch(
      createNode({
        type,
      })
    );
  };

  return (
    <DirectoryContext.Provider
      value={{
        dispatch,
      }}
    >
      <section className="directory">
        <div className="header">
          <div
            className="title"
            onClick={() => dispatch(toggleContentVisibility())}
          >
            {state.showContents ? <FaChevronDown /> : <FaChevronRight />}
            <p>Files</p>
          </div>
          <Controls canEdit={false} onAction={handleControlItemClick} />
        </div>
        {state.showContents ? (
          <div className="content">
            <Nodes nodes={state.nodes} />
          </div>
        ) : null}
      </section>
    </DirectoryContext.Provider>
  );
};

export default Directory;
