// Create a class to represent a virtual DOM node.
class VNode {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

// Create a function to render a virtual DOM node to the real DOM.
function render(vnode, container) {
  // Create a real DOM node based on the virtual DOM node.
  const element = document.createElement(vnode.type);

  // Set the properties of the real DOM node.
  for (const prop in vnode.props) {
    element.setAttribute(prop, vnode.props[prop]);
  }

  // Append the children of the real DOM node.
  for (const child of vnode.children) {
    render(child, element);
  }

  // Append the real DOM node to the container.
  container.appendChild(element);
}

// Create a virtual DOM tree.
const vnode = new VNode("div", { id: "app" }, [
  new VNode("h1", {}, "Hello, world!"),
  new VNode("p", {}, "This is a custom virtual DOM."),
]);

// Render the virtual DOM tree to the real DOM.
render(vnode, document.getElementById("root"));
