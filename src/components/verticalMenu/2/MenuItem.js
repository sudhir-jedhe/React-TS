import { FaArrowRight } from "react-icons/fa";
const MenuItem = ({ children, onHover, active }) => {
  return (
    <div
      className={active ? "active menuItem" : "menuItem"}
      onMouseEnter={onHover}
    >
      {children}
      {active && <FaArrowRight className="arrow" />}
    </div>
  );
};

export default MenuItem;
