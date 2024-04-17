// Create a function to de-serialize a virtual DOM tree from a string.
function deSerialize(str) {
  // Parse the string into an object.
  const obj = JSON.parse(str);

  // Create a virtual DOM node from the object.
  const vnode = new VNode(obj.type, obj.props, obj.children);

  // Recursively de-serialize the children of the virtual DOM node.
  for (const child of vnode.children) {
    child = deSerialize(child);
  }

  // Return the virtual DOM node.
  return vnode;
}

// De-serialize the virtual DOM tree from the string.
const vnode = deSerialize(
  '{"type":"div","props":{"id":"app"},"children":[{"type":"h1","props":{},"children":"Hello, world!"},{"type":"p","props":{},"children":"This is a custom virtual DOM."}]}'
);

// Render the virtual DOM tree to the real DOM.
render(vnode, document.getElementById("root"));
