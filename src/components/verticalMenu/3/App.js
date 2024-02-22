import Menu from "./Menu";
import { FaChevronRight } from "react-icons/fa";

export default function App() {
  return (
    <div className="menu">
      <Menu>
        <Menu.Item>
          Home
          <FaChevronRight />
        </Menu.Item>
        <Menu.Item>
          Questions
          <FaChevronRight />
        </Menu.Item>
        <Menu.Item>
          Resources
          <FaChevronRight />
        </Menu.Item>
        <Menu.Item>
          Profile
          <FaChevronRight />
        </Menu.Item>
        <Menu.Item>
          Account
          <FaChevronRight />
        </Menu.Item>
      </Menu>
    </div>
  );
}
