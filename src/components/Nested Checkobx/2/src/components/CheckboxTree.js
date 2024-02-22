import React from "react";
import { useStore } from "../store";
import CheckboxNode from "./CheckboxNode";

const CheckboxTree = () => {
  const { data } = useStore();

  return (
    <div className="checkbox-tree">
      {data &&
        data.map((node) => (
          <div key={node.id}>
            <CheckboxNode node={node} />
            {node.children &&
              node.children.map((child) => (
                <div key={child.id}>
                  <CheckboxNode node={child} />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default CheckboxTree;
