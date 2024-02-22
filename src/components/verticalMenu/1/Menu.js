import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const MenuParent = ({ children }) => {
  return <div>{children}</div>;
};

const MenuItem = ({ id, children }) => {
  const [activeItem, setActiveItem] = React.useState(null);
  return (
    <div
      className="menuItem"
      id={id}
      onMouseEnter={() => setActiveItem(id)}
      onMouseLeave={() => setActiveItem(null)}
    >
      {children}
      {activeItem === id ? <IoIosArrowForward /> : null}
    </div>
  );
};

const Menu = MenuParent;
Menu.Item = MenuItem;

export default Menu;
