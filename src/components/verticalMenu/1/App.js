import Menu from "./Menu";

export default function App() {
  return (
    <div className="menu">
      <Menu>
        <Menu.Item id={1}>Home</Menu.Item>
        <Menu.Item id={2}>Questions</Menu.Item>
        <Menu.Item id={3}>Resources</Menu.Item>
        <Menu.Item id={4}>Profile</Menu.Item>
        <Menu.Item id={5}>Account</Menu.Item>
      </Menu>
    </div>
  );
}
