import React from "react";




const CheckboxNode = ({ node }) => {
  return (
    <div>
      <input type="checkbox" checked={node.checked === 2} />
      <span>{node.name}</span>
    </div>
  );
};

export default CheckboxNode;


const CheckboxNode = ({ node }) => {
  return (
    <div>
      <input type="checkbox" checked={node.checked === 2} />
      <span>{node.name}</span>
    </div>
  );
};

export default React.memo(CheckboxNode);
