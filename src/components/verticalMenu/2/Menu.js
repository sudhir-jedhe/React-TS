import React, { useState } from "react";
const Menu = ({ children }) => {
  const [isActive, setActive] = useState(-1);
  return (
    <div onMouseLeave={() => setActive(-1)}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          active: isActive === index,
          onHover: () => setActive(index),
        });
      })}
    </div>
  );
};

export default Menu;
